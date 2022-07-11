const data = require('../data/zoo_data');

function pegaAnimalDia(diaDaSemana) {
  const animais = [];
  data.species.forEach((animal) => {
    if (animal.availability.includes(diaDaSemana)) {
      animais.push(animal.name);
    }
  });

  if (animais.length === 0) {
    return 'The zoo will be closed!';
  }

  return animais;
}

function avaliaParametro(param) {
  const animais = data.species.map((animal) => animal.name);
  return animais.includes(param);
}

function message(diaDaSemana) {
  if (diaDaSemana.open === 0) {
    return 'CLOSED';
  }

  return `Open from ${diaDaSemana.open}am until ${diaDaSemana.close}pm`;
}

function criandoDiasDaSemana(diasDaSemana) {
  let novoDia = diasDaSemana;
  novoDia = Object.keys(data.hours)
    .reduce((acumulador, valorAtual) => {
      const novo = acumulador;
      novo[valorAtual] = {
        officeHour: message(data.hours[valorAtual]),
        exhibition: pegaAnimalDia(valorAtual),
      };

      return novo;
    }, {});

  return novoDia;
}

function getSchedule(scheduleTarget) {
  let diasDaSemana = [];
  diasDaSemana = criandoDiasDaSemana(diasDaSemana);

  if (avaliaParametro(scheduleTarget)) {
    diasDaSemana = data.species
      .find((bicho) => bicho.name === scheduleTarget).availability;
    return diasDaSemana;
  }

  if (diasDaSemana[scheduleTarget]) {
    return { [scheduleTarget]: diasDaSemana[scheduleTarget] };
  }

  return diasDaSemana;
}
getSchedule();
module.exports = getSchedule;
