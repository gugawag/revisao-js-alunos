class Humano extends Animal {

    salario: number;
    constructor(nome: string) {
        super(nome);
    }

    emitirSom(): string {
        return 'oi';
    }
}
