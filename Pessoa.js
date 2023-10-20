class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    get nomePessoa(){
        return this.nome;
    }
    get idadePessoa(){
        return this.idade;
    }
}

module.exports = Pessoa;