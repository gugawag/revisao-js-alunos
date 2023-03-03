const alunos = [
    {
        nome: "Gustavo",
        idade: 30
    },
    {
        nome: "Wagner",
        idade: 20
    },
    {
        nome: "Diniz",
        idade: 17
    }
];


for (let aluno of alunos) {
    // colocar no html nome - idade
    mostrarAlunoNoHTML(aluno.nome, aluno.idade);
}

function inserirAluno() {
    const nomeAluno = document.querySelector("#nome").value;
    const idadeAluno = Number(document.querySelector("#idade").value);
    alunos.push({nome: nomeAluno, idade: idadeAluno});
    mostrarAlunoNoHTML(nomeAluno, idadeAluno);
}

function mostrarAlunoNoHTML(nome, idade) {
    const elementoP = document.createElement("p");
    elementoP.textContent = `${nome} - ${idade}`;

    const elementoBotaoApagar = document.createElement("button");
    elementoBotaoApagar.textContent = "X";

    elementoBotaoApagar.addEventListener('click', (event) => {
            removerAlunoDaLista(alunos, nome);
            event.target.parentElement.remove();
        }
    );
    elementoP.appendChild(elementoBotaoApagar);
    document.body.appendChild(elementoP);
}

function removerAlunoDaLista(alunos, nome) {
    const indxRemocao = alunos.indexOf(aluno => aluno.nome === nome);
    alunos.splice(indxRemocao, 1);
}
