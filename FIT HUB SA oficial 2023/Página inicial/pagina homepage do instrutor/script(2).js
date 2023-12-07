let nomeAluno = document.getElementById('Nome');
let idadeAluno = document.getElementById('Idade');
let emailAluno = document.getElementById('Email');




function Pesquisar(){

    document.getElementById('divListagemALunos').style.display = 'flex'

    nomeAluno.innerHTML += 'Nome: ' + JSON.parse(localStorage.getItem('NomesAlunos'))
    idadeAluno.innerHTML += 'Idade: ' + JSON.parse(localStorage.getItem('IdadesAlunos')) + ' annos'
    emailAluno.innerHTML += 'E-mail: ' + JSON.parse(localStorage.getItem('EmailAlunos'))


}
