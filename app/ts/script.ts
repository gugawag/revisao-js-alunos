const alunoControlador = new AlunoControlador();

const aluno = new Aluno('Gustavo', 30);
// console.log(aluno.idade);
// console.log(aluno.nome);

let animais: Animal[];

animais = [];
const humano = new Humano('Carlos');
humano.salario = 100;

const cachorro = new Cachorro('Bob', 'Caramelo');

animais.push(humano, cachorro);

animais.forEach(animal => console.log(animal.emitirSom()));


