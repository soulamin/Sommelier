import React, { useEffect, useState, useRef } from "react";
import "../Pesquisar/search.css";
import axios from "axios";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import {
  Link,
  useLocation,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { getQueryVariable } from "../../helper";
import CardPesquisa from "../../components/CardPesquisa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Loader from "../../assets/images/loader.svg";
import Logo from "../../assets/images/logo-header.svg";
import IconBusca from "../../assets/images/icon-busca.svg";
import { Redirect } from "../../components/Redirect";

function ResultadoProduto() {
  const [isLoading, setIsLoading] = useState(true);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(10);
  const [produtos, setProdutos] = useState([]);
  const [categoriasComProduto, setCategoriasComProduto] = useState([]);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  let navigate = useNavigate();

  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    if (button === "{enter}") handlePesquisar();
    // if (button === "`") setSearchText(searchText.slice(0, -1));

    // str.slice(0, -1)
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const handlePesquisar = () => {
    if (searchText !== "") {
      navigate({
        pathname: "/produtos",
        search: `?${createSearchParams({
          s: searchText,
        })}`,
      });
      realod();
      setIsShowKeyBoard(false);
    }
  };

  useEffect(() => {
    load();
    // console.log(location);
  }, []);

  async function load() {
    const requestCategorias = await axios.get(
      `http://localhost:5000/api/v1/products-categories?unidade=${window.sessionStorage.getItem(
        "unidade"
      )}`
    );
    setCategoriasComProduto(requestCategorias.data);

    const responseQuantidadeProduto = await axios.get(
      `http://localhost:5000/api/v1/get-quantidade-produto`
    );
    const quantidade = responseQuantidadeProduto.data[0].quantidade_de_produtos;

    setQuantidadeProdutos(quantidade);

    if (getQueryVariable("s")) {
      const requestSecondPage = await axios.get(
        `http://localhost:5000/api/v1/search-product?unidade=${window.sessionStorage.getItem(
          "unidade"
        )}&pesquisa=${getQueryVariable("s")}`
      );
      setSearchText(getQueryVariable("s"));

      var cds = requestSecondPage.data.filter((p) => {
        if (p.titulo.substring(0, 3) === "CDS") return p;
      });
      var noCds = requestSecondPage.data.filter((p) => {
        if (p.titulo.substring(0, 3) !== "CDS") return p;
      });

      setProdutos(cds.concat(noCds).slice(0, quantidade));
      setIsLoading(false);
      window.sessionStorage.setItem("tipoEscolha", "pesquisa");
    } else {
      // Busca por perguntas
      let { perguntasSelecionadas } = location.state;
      console.log(perguntasSelecionadas);
      // let terms_search = perguntasSelecionadas.filter((value, index, self) => {
      //   return self.indexOf(value) === index;
      // });
      let terms_search = perguntasSelecionadas;
      console.log("terms_search", terms_search);
      console.log("aqui", terms_search[0]);
      // delete terms_search[3];
      console.log("terms_search", terms_search);
      const requestSecondPage = await axios.get(
        `http://localhost:5000/api/v1/search-product?unidade=${window.sessionStorage.getItem(
          "unidade"
        )}&perguntas=${terms_search.toString()}`
      );
      console.log("produtos", requestSecondPage.data);
      var cds = requestSecondPage.data.result.filter((p) => {
        if (p.titulo.substring(0, 3) === "CDS") return p;
      });
      var noCds = requestSecondPage.data.result.filter((p) => {
        if (p.titulo.substring(0, 3) !== "CDS") return p;
      });
      setResponseMessage(requestSecondPage.data.message);
      console.log(cds);
      console.log(noCds);
      console.log(cds.concat(noCds));
      setProdutos(cds.concat(noCds).slice(0, quantidade));
      setIsLoading(false);
      window.sessionStorage.setItem("tipoEscolha", "perguntas");
    }
  }

  const layoutCategoria = () => {
    return categoriasComProduto.map((categoria, index) => {
      return (
        <>
          <div class="title">
            {index === 0 ? (
              <h1 class="title h1 text-support mb2">
                <strong>{categoria.tipo}&nbsp;</strong>
              </h1>
            ) : (
              <h2 class="title h1 text-support mb2">
                <strong>{categoria.tipo}&nbsp;</strong>
              </h2>
            )}
          </div>
          <CardPesquisa produtos={categoria.produtos} />
        </>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText !== "") {
      navigate({
        pathname: "/produtos",
        search: `?${createSearchParams({
          s: searchText,
        })}`,
      });

      realod();
    }
  };

  async function realod() {
    const requestSecondPage = await axios.get(
      `http://localhost:5000/api/v1/search-product?unidade=${window.sessionStorage.getItem(
        "unidade"
      )}&pesquisa=${getQueryVariable("s")}`
    );
    setProdutos(requestSecondPage.data);
  }

  const layoutEmpt = () => {
    return getQueryVariable("s") ? (
      <div class="title">
        <h1 class="title h2 text-secondary mb2">
          <strong>Ops!</strong>
        </h1>
        <h2 class="title h3 text-support mb2">
          Não encontramos nenhum resultado para{" "}
          <span class="text text-secondary">“{getQueryVariable("s")}”.</span>{" "}
          Tente verificar a ortografia, utilize termos genéricos, se preferir
          navegue pelas categorias
        </h2>
      </div>
    ) : (
      <>
        <div class="title" style={{ marginTop: "20vh" }}>
          <h1 class="title h2 text-secondary mb2">
            <strong>Ops!</strong>
          </h1>
          <h2 class="title h3 text-support mb2">
            Não encontramos nenhum resultado.
          </h2>
          {/* <h2 class="title h3 text-support mb2">
          Não encontramos nenhum resultado para{" "}
          <span class="text text-secondary">“as respostas”.</span>
        </h2> */}
        </div>

        <div class="title" style={{ marginTop: 100 }}>
          <h2 class="title h3 text-support mb2">
            <strong>
              Mas temos algumas sugestões, clique no botão abaixo para
              visualizar
            </strong>
          </h2>
        </div>
        <Link
          to={"/sugestoes"}
          title="Visualizar sugestões"
          className="button button-background bg-yellow text-primary text-size-default"
        >
          Visualizar sugestões
        </Link>
        {/* <div class="title" style={{ marginTop: 100 }}>
          <h1 class="title h2 text-secondary mb2">
            <strong>Veja abaixo nossas sugestões</strong>
          </h1>
        </div>
        {categoriasComProduto.length != 0 && layoutCategoria()} */}
      </>
    );
  };

  return (
    <>
      {!isLoading ? (
        <>
          <main>
            <Header logo={Logo} init={false} link={"/"} isGoHome={true} />
            <div class="container">
              <section class="content mb5">
                {getQueryVariable("s") && (
                  <section className="search mb4">
                   {/* <form className="form" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Olá, qual a boa?"
                        value={searchText}
                        onChange={(value) => {
                          setSearchText(value.target.value);
                          keyboard.current.setInput(value.target.value);
                        }}
                        onFocus={() => {
                          setIsShowKeyBoard(true);
                        }}
                        autocomplete="off"
                        name="search"
                        className="text text-primary text-size-default"
                      />
                      {isShowKeyBoard && (
                        <Keyboard
                          keyboardRef={(r) => (keyboard.current = r)}
                          layoutName={layout}
                          display={{
                            "{bksp}": "apagar",
                            "{enter}": "pesquisar",
                            "{tab}": "tab",
                            "{lock}": "caps lock",
                            "{shift}": "shift",
                            "{space}": "espaço",
                            "`": "fechar",
                          }}
                          onChange={(input) => {
                            setSearchText(input);
                          }}
                          onKeyPress={onKeyPress}
                        />
                      )}
                      <input
                        type="submit"
                        value=""
                        style={{ backgroundImage: `url(${IconBusca})` }}
                      />
                        </form>*/}
                  <article class="mb3 ajusteSearch" style={{ paddingLeft: "50px" }}>
                  <Link
                  to={"/pesquisa"}
                  title="Pesquisar"
                  className="button button-background bg-yellow text-primary text-size-default"
                >
                  <img
                    src={IconBusca}
                    alt="Pesquisar"
                    className="icon-button"
                  />
                  Pesquisar
                </Link>
                  </article>                              
                  </section>
                  
                  
                )}

                {produtos.length !== 0 && (
                  <div class="title mb4">
                    <h1 class="title h1 text-support mb3">
                      {responseMessage}
                      <strong class="text-secondary">Encontramos</strong>
                      <strong class="text-secondary">para você</strong>
                    </h1>
                  </div>
                )}

                {produtos.length !== 0 ? (
                  <Card produtos={produtos} />
                ) : (
                  layoutEmpt()
                )}
              </section>
            </div>
          </main>
          {getQueryVariable("s") ? (
            <Footer init={false} link={"/"} isGoHome={false} fixed={true} />
          ) : (
            <Footer
              init={false}
              link={"pergunta"}
              customNavigate={() => {
                let { perguntasSelecionadas, perguntas } = location.state;
                perguntasSelecionadas.pop();
                navigate("/perguntas", {
                  state: {
                    perguntasSelecionadas: perguntasSelecionadas,
                    perguntas: perguntas,
                  },
                });
              }}
              isGoHome={false}
              fixed={true}
            />
          )}
        </>
      ) : (
        <div style={styles.divLoading}>
          <img src={Loader} />
        </div>
      )}
      <Redirect />
    </>
  );
}

const styles = {
  divLoading: {
    display: "flex",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default ResultadoProduto;
