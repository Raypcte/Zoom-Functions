const getOpeningHours = require('../src/getOpeningHours');

const horas = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  test('Se não recebe parametro, retorna todas as horas', () => {
    expect(getOpeningHours()).toEqual(horas);
  });

  test('Se não é um dia da semana, lança erro', () => {
    expect(() => getOpeningHours('oi')).toThrow('The day must be valid. Example: Monday');
  });

  test('Verificar se a hora incorreta, lança um erro', () => {
    expect(() => getOpeningHours('Monday', 'ola:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '13:minutos-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '13:00-hum')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Monday', '12:70-AM')).toThrow('The minutes must be between 0 and 59');
  });

  test('Verificar as horas dos dias da semana', () => {
    expect(getOpeningHours('Monday', '12:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
});
