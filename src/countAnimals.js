const data = require('../data/zoo_data');

function countAnimals(animal) {
  const quantidade = {};
  data.species.forEach((bicho) => {
    quantidade[bicho.name] = bicho.residents.length;
  });

  if (animal === undefined) {
    return quantidade;
  }

  let raça = quantidade[animal.specie];

  if (animal.sex !== undefined) {
    raça = data.species
      .find((bicho) => bicho.name === animal.specie).residents
      .filter((bicho) => bicho.sex === animal.sex).length;
  }
  return raça;
}

module.exports = countAnimals;
