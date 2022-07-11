const data = require('../data/zoo_data');
// child: são pessoas menores de 18 anos;

// adult: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;

// senior: são pessoas com idade maior ou igual a 50 anos.

function countEntrants(entrants) {
  const entradas = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((pessoa) => {
    if (pessoa.age < 18) {
      entradas.child += 1;
    } else if (pessoa.age >= 18 && pessoa.age < 50) {
      entradas.adult += 1;
    } else {
      entradas.senior += 1;
    }
  });

  return entradas;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const pessoas = countEntrants(entrants);
  const valorTotal = pessoas.adult * 49.99 + pessoas.child * 20.99 + pessoas.senior * 24.99;
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
