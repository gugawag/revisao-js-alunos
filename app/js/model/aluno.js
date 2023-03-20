class Aluno {
    _nome;
    idade;
    constructor(_nome, idade) {
        this._nome = _nome;
        this.idade = idade;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
}
