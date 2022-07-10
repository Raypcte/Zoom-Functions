const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.some(
    (element) =>
      element.name === animal
      && element.residents.every((animal2) => animal2.age >= age),
  );
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
