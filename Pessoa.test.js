const Pessoa = require('./Pessoa');

const Rodrigo = new Pessoa("Rodrigo da Silva");

test('Verifica se existe espaço no nome', () => {
    expect(Rodrigo.nomePessoa).toMatch(" ");
  });

//Rodrigo.idade = 20;

test('Verifica se a idade foi definida', () => {
    expect(Rodrigo.idadePessoa).toBeDefined();
  }); 
