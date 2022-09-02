module.exports = function unidadeTemplate(item) {
  let unidades = [];

  item.unidades.forEach((unidade) => {
    unidades.push({
      where: {
        slug: unidade.slug,
      },
      create: {
        name: unidade.name,
        slug: unidade.slug,
      },
    });
  });

  return unidades;
};
