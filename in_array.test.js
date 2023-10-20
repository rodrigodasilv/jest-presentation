const in_array = require('./in_array');

test('Envia um array com frutas e uma fruta não existente no array', () => {
  expect(in_array(["Maça","Melão","Banana"], "Goiaba")).toBeFalsy();
});

test('Envia um array com frutas e uma fruta existente no array', () => {
    expect(in_array(["Maça","Melão","Banana"], "Banana")).toBeTruthy();
  });