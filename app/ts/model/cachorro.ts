class Cachorro extends Animal {
    constructor(nome: string, private raca: string) {
        super(nome);
    }

    emitirSom(): string {
        return 'auau';
    }
}
