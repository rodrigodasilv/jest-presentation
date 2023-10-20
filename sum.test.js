const sum = require('./sum');

test('Adiciona 1 a dois e espera que o resultado seja 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Adiciona 0.1 a 0.2 e espera que o resultado seja 0.3', () => {
  expect(sum(0.1, 0.2)).toBe(0.3);
  //expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});