class AlunoServico {

    private repositorio: AlunoRepositorio;
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome: string, idade: number): Aluno {
        const aluno = new Aluno(nome, idade);
        if (aluno.idade >= 18) {
            return this.repositorio.inserir(aluno);
        }
        // é menor de idade. Deveria devolver erro
        return undefined;
    }

    remover(nome: string) {
        this.repositorio.remover(nome);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome: string) {
        return this.repositorio.buscarPorNome(nome);
    }
}
