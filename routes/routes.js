const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const axios = require("axios");
const async = require("async");
const request = require("request");
const fs = require("fs");
const router = express.Router();
const saveImageToDisk = require("../helpers/dataHelper");
const opcoesTemplate = require("../helpers/opcoesTemplate");
const unidadeTemplate = require("../helpers/unidadeTemplate");
const searchPerguntasTemplate = require("../helpers/searchPerguntasTemplate");
const searchPerguntasTemplatePromocional = require("../helpers/searchPerguntasTemplatePromocional");

function fileNameFromUrl(url) {
  var matches = url.match(/\/([^\/?#]+)[^\/]*$/);
  if (matches.length > 1) {
    return matches[1];
  }
  return null;
}
var urlLocalImage = process.env.BASE_URL_APP + "/sommelier/imagens/";

router.get("/sync", async (req, res) => {
  try {
    require("dns").resolve("www.google.com", async function (err) {
      if (err) {
        return res.send(false);
      } else {
        let lastDateLocal = await prisma.updated.findMany();
        if (lastDateLocal.length == 0) {
          lastDateLocal = new Date().toISOString();
        } else {
          lastDateLocal = new Date(lastDateLocal[0].date).toISOString();
        }

        let lastDateWordpress = await axios.get(
          process.env.BASE_URL_API + "wp-json/sommelier/v1/last-date/"
        );
        lastDateWordpress = new Date(lastDateWordpress.data).toISOString();

        console.log(lastDateWordpress);
        console.log(lastDateLocal);

        if (lastDateWordpress > lastDateLocal) {
          const requestPrimaryPage = await axios.get(
            process.env.BASE_URL_API + "wp-json/sommelier/v1/primary-page/"
          );

          if (requestPrimaryPage.data.logo) {
            requestPrimaryPage.data.logo = saveImageToDisk(
              requestPrimaryPage.data.logo,
              "C:/xampp/htdocs/sommelier/imagens/"
            );
          } else {
            requestPrimaryPage.data.logo = null;
          }

          if (requestPrimaryPage.data.banner_promo) {
            requestPrimaryPage.data.banner_promo = saveImageToDisk(
              requestPrimaryPage.data.banner_promo,
              "C:/xampp/htdocs/sommelier/imagens/"
            );
          } else {
            requestPrimaryPage.data.banner_promo = null;
          }

          await prisma.primeirapagina.deleteMany({});
          const insertPrimeiraPagina = await prisma.primeirapagina.create({
            data: {
              logo: requestPrimaryPage.data.logo,
              banner: requestPrimaryPage.data.banner_promo,
              texto1: requestPrimaryPage.data.texto_1,
              texto2: requestPrimaryPage.data.texto_2,
            },
          });

          const requestSegundaPagina = await axios.get(
            process.env.BASE_URL_API + "wp-json/sommelier/v1/second-page/"
          );

          if (requestSegundaPagina.data.banner_promo_sec) {
            requestSegundaPagina.data.banner_promo_sec = saveImageToDisk(
              requestSegundaPagina.data.banner_promo_sec,
              "C:/xampp/htdocs/sommelier/imagens/"
            );
          } else {
            requestSegundaPagina.data.banner_promo_sec = null;
          }

          await prisma.segundapagina.deleteMany({});
          const insertSegundaPagina = await prisma.segundapagina.create({
            data: {
              banner: requestSegundaPagina.data.banner_promo_sec,
              titulo: requestSegundaPagina.data.titulo,
              pergunta1: requestSegundaPagina.data.pergunta_1,
              pergunta2: requestSegundaPagina.data.pergunta_2,
            },
          });

          const requestPerguntas = await axios.get(
            process.env.BASE_URL_API + "wp-json/sommelier/v1/questions-page/"
          );
          const deleteRotas = prisma.rota.deleteMany();
          const deletePerguntas = prisma.pergunta.deleteMany();
          const deleteOpcoes = prisma.opcao.deleteMany();
          await prisma.$transaction([
            deleteOpcoes,
            deletePerguntas,
            deleteRotas,
          ]);

          requestPerguntas.data.forEach(async (item) => {
            await prisma.rota.create({
              data: {
                order: item.order,
                nome: item.nome_rota,
                pergunta: {
                  create: opcoesTemplate(item),
                },
              },
            });
          });

          // Local
          const requestUnidades = await axios.get(
            process.env.BASE_URL_API + "wp-json/sommelier/v1/unidades/"
          );
          await prisma.local.deleteMany({});
          requestUnidades.data.forEach(async (unidade) => {
            await prisma.local.create({
              data: {
                slug: unidade.slug,
                name: unidade.name,
              },
            });
          });

          const requestProdutos = await axios.get(
            process.env.BASE_URL_API + "wp-json/sommelier/v1/products/"
          );
          await prisma.produto.deleteMany({});
          var imgsDownload = [];
          requestProdutos.data.forEach(async (product) => {
            if (product.imagem) {
              imgsDownload.push(product.imagem);
            }
            await prisma.produto.create({
              data: {
                titulo: product.titulo,
                descricao: product.descricao,
                preco: parseFloat(product.preco),
                preco_promocional: parseFloat(product.preco_promocional),
                corredor: product.corredor,
                setor: product.setor,
                temperatura: product.temperatura,
                caracteristicas_visuais: product.caracteristicas_visuais,
                teor_alcoolico: product.teor_alcoolico,
                volume: product.volume,
                // imagem: product.imagem
                //   ? saveImageToDisk(
                //       product.imagem,
                //       "C:/xampp/htdocs/sommelier/imagens/"
                //     )
                //   : null,
                imagem: product.imagem
                  ? urlLocalImage + fileNameFromUrl(product.imagem)
                  : null,
                tipo: product.tipo,
                tags: product.tags,
                pais: product.pais,
                local: {
                  connectOrCreate: unidadeTemplate(product),
                },
              },
              include: {
                local: true,
              },
            });
          });

          const q = async.queue((task, cb) => {
            request
              .get(task)
              .on("response", (response) => {
                // the call to `cb` could instead be made on the file stream's `finish` event
                // if you want to wait until it all gets flushed to disk before consuming the
                // next task in the queue
                cb();
              })
              .on("error", (err) => {
                console.log(err);
                cb(err);
              })
              .pipe(
                fs.createWriteStream(
                  "C:/xampp/htdocs/sommelier/imagens/" + fileNameFromUrl(task)
                )
              );
          }, 50);

          q.drain(async () => {
            let quantidadeProduto = await axios.get(
              process.env.BASE_URL_API +
                "wp-json/sommelier/v1/quantidade-produtos"
            );
            await prisma.produtoconfig.deleteMany({});
            await prisma.produtoconfig.create({
              data: {
                quantidade_de_produtos: quantidadeProduto.data,
              },
            });

            // Sync
            await prisma.updated.deleteMany({});
            await prisma.updated.create({
              data: {
                date: lastDateWordpress,
              },
            });

            console.log("sync terminou com sucesso");
            return res.send(true);
          });

          if (imgsDownload.length != 0) {
            imgsDownload.forEach(function (photo) {
              if (process.env.NODE_ENV !== "development") {
                q.push(photo, function (err) {
                  if (err) {
                    console.log(err);
                  }
                });
              }
            });
          }

          let quantidadeProduto = await axios.get(
            process.env.BASE_URL_API +
              "wp-json/sommelier/v1/quantidade-produtos"
          );
          await prisma.produtoconfig.deleteMany({});
          await prisma.produtoconfig.create({
            data: {
              quantidade_de_produtos: quantidadeProduto.data,
            },
          });

          // Sync
          await prisma.updated.deleteMany({});
          await prisma.updated.create({
            data: {
              date: lastDateWordpress,
            },
          });

          console.log("sync terminou com sucesso");
          if (process.env.NODE_ENV !== "production") {
            return res.send(true);
          }
        } else {
          // Sem Sync
          return res.send(false);
        }
      }
    });
  } catch (error) {
    console.log("error", error);
    return res.status(400).send({ error: "falhou" });
  }
});

router.get("/primary-page", async (req, res) => {
  try {
    const primeiraPagina = await prisma.primeirapagina.findMany();

    return res.send(primeiraPagina);
  } catch (error) {
    console.log("error", error);
    return res.status(400).send({ error: "falhou" });
  }
});

router.get("/second-page", async (req, res) => {
  try {
    const segundaPagina = await prisma.segundapagina.findMany();

    return res.send(segundaPagina);
  } catch (error) {
    return res.status(400).send({ error: "falhou" });
  }
});

router.get("/questions-page", async (req, res) => {
  try {
    const questionsPagina = await prisma.rota.findMany({
      orderBy: [
        {
          order: "asc",
        },
      ],
      include: {
        // perguntas: true,
        pergunta: {
          include: {
            opcao: true,
          },
        },
      },
    });

    return res.send(questionsPagina);
  } catch (error) {
    console.log("error", error);
    return res.status(400).send({ error: "falhou" });
  }
});

router.get("/search-product", async (req, res) => {
  try {
    if (req.query.pesquisa == undefined) {
      // Busca por perguntas
      // console.log(req.query.perguntas.split(","));
      let perguntas = req.query.perguntas.split(",");
      perguntas = perguntas.filter((value, index, self) => {
        if (!value.includes("price__")) {
          return value;
        }
      });
      let price = req.query.perguntas
        .split(",")
        .filter((value, index, self) => {
          if (value.includes("price__")) {
            return value;
          }
        });

      if (price.length) {
        if (price.toString().includes("Abaixo")) {
          price = price.toString().replace("price__", "").split("-");
          price = price.map((item, index) => {
            return index == 0 ? item : parseFloat(item);
          });
          var tipoPrice = "abaixo";
        } else if (price.toString().includes("Acima")) {
          price = price.toString().replace("price__", "").split("-");
          price = price.map((item, index) => {
            return index == 0 ? item : parseFloat(item);
          });
          var tipoPrice = "acima";
        } else {
          price = price.toString().replace("price__", "").split("-");
          price = price.map((item) => {
            return parseFloat(item);
          });
          var tipoPrice = "range";
        }
      } else {
        price = null;
        var tipoPrice = false;
      }

      // console.log("perguntas", perguntas);
      // console.log("price", price);
      // console.log("tipoPrice", tipoPrice);
      /*  console.log(
        JSON.stringify(
          await searchPerguntasTemplate(
            perguntas,
            req.query.unidade,
            price,
            tipoPrice
          )
        )
      ); */

      console.log("perguntas", perguntas);

      const products = await prisma.produto.findMany({
        where: await searchPerguntasTemplate(
          perguntas,
          req.query.unidade,
          price,
          tipoPrice
        ),
        include: {
          local: true,
        },
      });

      const productsPromocional = await prisma.produto.findMany({
        where: await searchPerguntasTemplatePromocional(
          perguntas,
          req.query.unidade,
          price,
          tipoPrice
        ),
        include: {
          local: true,
        },
      });

      const produtosReturn = [];

      for (let index = 0; index < products.length; index++) {
        produtosReturn.push(products[index]);
      }

      for (let index = 0; index < productsPromocional.length; index++) {
        if (
          produtosReturn.findIndex(
            (item) => item.id === productsPromocional[index].id
          ) === -1
        ) {
          produtosReturn.push(productsPromocional[index]);
        }
      }

      if (produtosReturn.length === 0) {
        console.log("busca vazia");

        let perguntasSecondSearch = perguntas.slice(0, -1);

        console.log("perguntasSecondSearch", perguntasSecondSearch);

        const productsSecondSearch = await prisma.produto.findMany({
          where: await searchPerguntasTemplate(
            perguntasSecondSearch,
            req.query.unidade,
            price,
            tipoPrice
          ),
          include: {
            local: true,
          },
        });

        const productsPromocionalSecondSearch = await prisma.produto.findMany({
          where: await searchPerguntasTemplatePromocional(
            perguntasSecondSearch,
            req.query.unidade,
            price,
            tipoPrice
          ),
          include: {
            local: true,
          },
        });

        const produtosReturnSecondSearch = [];

        for (let index = 0; index < productsSecondSearch.length; index++) {
          produtosReturnSecondSearch.push(productsSecondSearch[index]);
        }

        for (
          let index = 0;
          index < productsPromocionalSecondSearch.length;
          index++
        ) {
          if (
            produtosReturnSecondSearch.findIndex(
              (item) => item.id === productsPromocionalSecondSearch[index].id
            ) === -1
          ) {
            produtosReturnSecondSearch.push(
              productsPromocionalSecondSearch[index]
            );
          }
        }
        return res.send({
          result: produtosReturnSecondSearch,
          message:
            "Não encontramos nenhum resultado, mas temos algumas sugestões",
        });
      } else {
        return res.send({
          result: produtosReturn,
          message: "Encontramos as melhores opções",
        });
      }
    } else {
      // Busca por pesquisa
      const products = await prisma.produto.findMany({
        where: {
          titulo: {
            contains: req.query.pesquisa,
          },
          local: {
            some: {
              slug: {
                equals: req.query.unidade,
              },
            },
          },
        },
        include: {
          local: true,
        },
      });
      return res.send(products);
    }
  } catch (error) {
    console.log("error", error);
    return res.status(400).send({ error: error });
  }
});

router.get("/last-date", async (req, res) => {
  try {
    const lastDate = await prisma.updated.findMany();

    return res.send(lastDate);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

router.get("/get-quantidade-produto", async (req, res) => {
  try {
    const lastDate = await prisma.produtoconfig.findMany();

    return res.send(lastDate);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

router.get("/unidades", async (req, res) => {
  try {
    const unidades = await prisma.local.findMany();
    return res.send(unidades);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

router.get("/produto/:id", async (req, res) => {
  try {
    const produto = await prisma.produto.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    return res.send(produto);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

router.get("/products-categories", async (req, res) => {
  try {
    const categorias = await prisma.produto.findMany({
      distinct: ["tipo"],
      where: {
        local: {
          some: {
            slug: {
              equals: req.query.unidade,
            },
          },
        },
      },
      select: {
        tipo: true,
      },
    });

    const produtos = await prisma.produto.findMany({
      where: {
        local: {
          some: {
            slug: {
              equals: req.query.unidade,
            },
          },
        },
      },
    });

    categorias.forEach(async (categoria) => {
      categoria.produtos = [];

      produtos.forEach((produto) => {
        if (categoria.tipo === produto.tipo) {
          categoria.produtos.push(produto);
        }
      });
    });

    categorias.forEach(async (categoria) => {
      shuffle(categoria.produtos);
    });

    categorias.forEach(async (categoria) => {
      let items = categoria.produtos.slice(0, 10);

      categoria.produtos = items;
    });

    // console.log(products);

    // products.map(async (product) => {
    //   return (product.produtos = await prisma.produto.findMany({
    //     where: {
    //       tipo: {
    //         equals: "Suave",
    //       },
    //       unidades: {
    //         some: {
    //           slug: {
    //             equals: req.query.unidade,
    //           },
    //         },
    //       },
    //     },
    //     include: {
    //       unidades: true,
    //     },
    //   }));
    // });

    return res.send(categorias);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

router.post("/save-log", async (req, res) => {
  try {
    var time = new Date();
    var outraData = new Date();
    outraData.setHours(time.getHours() - 3);
    console.log(req.body.perguntas);

    const log = await prisma.log.create({
      data: {
        tipo: req.body.tipo,
        vinho_escolhido: req.body.vinho_escolhido,
        perguntas: req.body.perguntas == null ? undefined : req.body.perguntas,
        unidade: req.body.unidade == "null" ? null : req.body.unidade,
        created_at: outraData,
        send_wordpress: false,
      },
    });
    return res.send(log);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

router.get("/send-log-wordpress", async (req, res) => {
  try {
    require("dns").resolve("www.google.com", async function (err) {
      if (err) {
        return res.send(false);
      } else {
        // com internet
        const logs = await prisma.log.findMany({
          where: {
            send_wordpress: {
              equals: false,
            },
          },
        });
        if (logs.length) {
          const teste = await axios.post(
            process.env.BASE_URL_API + "wp-json/sommelier/v1/relatorio/",
            {
              logs: logs,
            }
          );

          teste.data.logs.forEach(async (log) => {
            await prisma.log.update({
              where: {
                id: log.id,
              },
              data: {
                send_wordpress: true,
              },
            });
          });

          return res.send({
            logs: logs,
          });
        } else {
          return res.send(false);
        }
      }
    });
  } catch (error) {
    return res.status(400).send({ error: "falhou" });
  }
});

prisma.$on("query", async (e) => {
  console.log(`${e.query} ${e.params}`);
});

module.exports = router;
