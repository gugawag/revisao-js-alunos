class Aluno {

    idade: number;
    constructor(private _nome: string, idade: number) {
        this.idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }
}
