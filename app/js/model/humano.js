class Humano extends Animal {
    salario;
    constructor(nome) {
        super(nome);
    }
    emitirSom() {
        return 'oi';
    }
}
