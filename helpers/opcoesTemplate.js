const saveImageToDisk = require("./dataHelper");
const getOpcoes = (item) => {
  let options = [];

  item.opcoes.forEach((opcao) => {
    options.push({
      titulo: opcao.opcao,
      slug: opcao.slug,
      tipo: item.modelo,
      image: opcao.img
        ? saveImageToDisk(opcao.img, "C:/xampp/htdocs/sommelier/imagens/")
        : null,
    });
  });

  return options;
};

module.exports = function opcoesTemplate(item) {
  let perguntas = [];
  item.perguntas.forEach((pergunta) => {
    perguntas.push({
      order: pergunta.order,
      titulo: pergunta.pergunta,
      perguntaFooter: pergunta.pergunta_footer,
      imageFooter: pergunta.slug_footer,
      opcao: {
        createMany: {
          data: getOpcoes(pergunta),
        },
      },
    });
  });

  return perguntas;
};
