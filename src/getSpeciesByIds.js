const data = require("../data/zoo_data");

function getSpeciesByIds(...ids) {
  console.log(ids);
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    const bicho = data.species.find((specie) => {
      // find = encontrar um itém do Array
      return ids[0] === specie.id;
    });
    return [bicho];
  }

  if (ids.length > 1) {
    const bichos = [];
    ids.forEach((id) => {
      const bicho = data.species.find((specie) => id === specie.id);
      bichos.push(bicho);
    });
    return bichos;
  }
}

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
