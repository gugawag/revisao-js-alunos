class AlunoRepositorio {
    private _alunos: Aluno[];
    constructor() {
        this._alunos = [];
    }

    inserir(aluno: Aluno): Aluno {
        this._alunos.push(aluno);
        return aluno;
    }

    remover(nome: string) {
        const indxRemocao = this._alunos.findIndex((aluno: Aluno) => aluno.nome === nome);
        this._alunos.splice(indxRemocao, 1);
    }

    listar() {
        return this._alunos;
    }

    buscarPorNome(nome: string) {
        return this._alunos.filter(aluno => aluno.nome === nome);
    }
}
