class Aluno {
    constructor(nome, idade) {
        this._nome = nome;
        this.idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }
}
