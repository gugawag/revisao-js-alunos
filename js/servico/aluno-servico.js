class AlunoServico {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade) {
        const aluno = new Aluno(nome, idade);
        if (aluno.idade >= 18) {
            return this.repositorio.inserir(aluno);
        }
        // é menor de idade. Deveria devolver erro
        return undefined;
    }

    remover(nome) {
        this.repositorio.remover(nome);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }
}
