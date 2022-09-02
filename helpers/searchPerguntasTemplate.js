const getOrRolesAnd = async (perguntas) => {
  result = [];
  perguntas.forEach((pergunta) => {
    if (!pergunta.includes("%")) result.push(pergunta);
  });

  return result;
};

const getOrRolesOr = async (perguntas) => {
  result = [];
  perguntas.forEach((pergunta) => {
    if (pergunta.includes("%")) result.push(pergunta);
  });

  return result;
};

module.exports = async function searchPerguntasTemplate(
  perguntas,
  unidade,
  price,
  tipoPrice
) {
  let unidades = [];
  let newRoles = [{ AND: [], OR: [] }];

  newRoles[0].AND.push({
    local: {
      some: {
        slug: {
          equals: unidade,
        },
      },
    },
  });

  unidades.push({
    local: {
      some: {
        slug: {
          equals: unidade,
        },
      },
    },
  });

  if (price) {
    if (tipoPrice === "abaixo") {
      unidades.push({
        preco: {
          lte: price[1],
        },
      });
      newRoles[0].AND.push({
        preco: {
          lte: price[1],
        },
      });
    } else if (tipoPrice === "acima") {
      unidades.push({
        preco: {
          gte: price[1],
        },
      });
      newRoles[0].AND.push({
        preco: {
          gte: price[1],
        },
      });
    } else {
      unidades.push({
        preco: {
          gte: price[0],
        },
      });

      unidades.push({
        preco: {
          lte: price[1],
        },
      });

      newRoles[0].AND.push({
        preco: {
          gte: price[0],
        },
      });

      newRoles[0].AND.push({
        preco: {
          lte: price[1],
        },
      });
    }

  }

  const or = await getOrRolesOr(perguntas);
  // or.split("%");
  const and = await getOrRolesAnd(perguntas);

  or.forEach((element) => {
    let p = element.split("%");
    and.forEach((andE, index) => {
      // console.log(element);
      // console.log(andE);
      if (p.includes(andE)) {
        delete and[index];
      }
    });
  });

  if (or.length) {
    or.forEach((pergunta) => {
      let p = pergunta.split("%");
      p.forEach((element) => {
        newRoles[0].OR.push({
          tags: {
            contains: element,
          },
        });
      });
    });
  }

  if (and.length) {
    and.forEach((pergunta) => {
      newRoles[0].AND.push({
        tags: {
          contains: pergunta,
        },
      });
    });
  }

  perguntas.forEach((pergunta) => {
    unidades.push({
      tags: {
        contains: pergunta,
      },
    });
  });

  if (newRoles[0].AND.length == 0) delete newRoles[0].AND;
  if (newRoles[0].OR.length == 0) delete newRoles[0].OR;

  console.log(JSON.stringify(newRoles));

  return newRoles[0];
};
