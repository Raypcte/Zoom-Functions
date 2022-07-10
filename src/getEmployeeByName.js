const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  return data.employees.find((funcionario) => (
    funcionario.lastName === employeeName || funcionario.firstName === employeeName
  ));
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
