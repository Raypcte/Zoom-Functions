const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregado = data.employees.find((funcionario) => funcionario.id === id);
  const bichoId = empregado.responsibleFor[0];
  let idade = 0;
  let bichoMaisVelho;

  data.species.find((bicho) => (
    bicho.id === bichoId
  )).residents.forEach((animal) => {
    if (animal.age > idade) {
      idade = animal.age;
      bichoMaisVelho = animal;
    }
  });

  return Object.values(bichoMaisVelho);
}

module.exports = getOldestFromFirstSpecies;
