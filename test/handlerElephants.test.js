const handlerElephants = require('../src/handlerElephants');

const elefantes = [
  {
    name: 'Ilana',
    sex: 'female',
    age: 11,
  },
  {
    name: 'Orval',
    sex: 'male',
    age: 15,
  },
  {
    name: 'Bea',
    sex: 'female',
    age: 12,
  },
  {
    name: 'Jefferson',
    sex: 'male',
    age: 4,
  },
];

describe('Testes da função HandlerElephants', () => {
  test('Se não tiver parametro retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  test('Se o parametro for diferente de string retorna uma mensagem', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Se o parametro for uma chave do objeto Elefante retorna o valor da chave', () => {
    expect(handlerElephants('name')).toBe('elephants');
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual(elefantes);
  });

  test('Testando a chamada do computeData', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(elefantes
      .map((elefante) => elefante.name));
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('oi')).toBe(null);
  });
});
