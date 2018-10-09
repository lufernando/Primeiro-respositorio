//document.getElementById('inserirProfessor').addEventListener("click", inserirProfessor);
//document.getElementById('inserirAluno').addEventListener("click", inserirAluno);

    function aluno() {
        this.nome;
        this.sobrenome;
        this.materia;
    }

    function professor(){
        this.nome;
        this.alunos = [];
        this.materia;
    }

    var select = document.getElementById('materiaProfessor'),
        arr = ['Javascript', 'Ta dificil', 'Ta muito dificil', 'Vamos la', 'Banco']

    for (let i = 0; i < arr.length; i++) {
        
        var option = document.createElement("option"),
            txt = document.createTextNode(arr[i]);
        option.appendChild(txt);
        option.setAttribute("value", arr[i]);
        select.insertBefore(option, select.lastChild);        
    }

    function inserirAluno() {

    var nome = document.getElementById('nomeAluno').value;
    var sobrenome = document.getElementById('sobrenomeAluno').value;
    var materia = document.getElementById('materiaAluno').value;
    
    var corpoTabela = document.getElementById('corpo-tabela')
    
    var tr = document.createElement('tr');
    tr.insertCell(0).innerHTML = nome;
    tr.insertCell(1).innerHTML = sobrenome;
    tr.insertCell(2).innerHTML = materia;

    tr.setAttribute('data-nome', nome);
    tr.setAttribute('data-sobrenome', sobrenome);
    tr.setAttribute('data-materia', materia);

    var btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = 'Excluir';
    btnExcluir.addEventListener('click', function(){
        excluirAluno(tr);
        //equivalente
        //this.parentElement.parentElement.remove();
    });
    tr.insertCell(3).appendChild(btnExcluir);

    corpoTabela.appendChild(tr);
};

function excluirAluno(tr){
    tr.remove();
}

function salvar(){

    var professor = new professor();
    professor.nome = document.getElementById('nomeProfessor');
    professor.materia = document.getElementById('materiaProfessor'); 

    var corpoTabela = getElementById('corpo-tabela');
    var linhas = corpoTabela.getElementsByTagName('tr');

    for (let iLinha = 0; iLinha < linhas.length; iLinha++) {
        var linha = linhas.item(iLinha);
        var nome = linha.dataset.nome;
        var sobrenome = linha.dataset.sobrenome;
        var materia = linha.dataset.materia;

        var aluno = new Aluno();
        aluno.nome = nome;
        aluno.sobrenome = sobrenome;
        aluno.materia = materia;

        professor.alunos.push(aluno);
        
    }

    console.log(professor);

}





