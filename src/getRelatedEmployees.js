const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  return data.employees.some(
    (funcionario) => funcionario.id === id && managers.includes(funcionario.id),
  );
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  const funcionarios = [];

  const gerente = isManager(managerId);

  data.employees.forEach((funcionario) => {
    if (gerente === true) {
      if (funcionario.managers.includes(managerId)) {
        funcionarios.push(`${funcionario.firstName} ${funcionario.lastName}`);
      }
    } else {
      throw new Error(
        'O id inserido não é de uma pessoa colaboradora gerente!',
      );
    }
  });

  return funcionarios;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
