class Cachorro extends Animal {
    raca;
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
    emitirSom() {
        return 'auau';
    }
}
