let vetorNomes = []
let vetorIdades = []
let vetorEmail = []
let vetorSenhas = []
let vetorSexo = []
let vetorOjetivos = []

let NomeAluno = document.getElementById('inpNome');
let IdadeAluno = document.getElementById('inpIdade');

let SexoAluno = document.getElementsByName('radioSexo');
let ObjetivoAluno = document.getElementsByName('radioObjetivo');

let EmailAluno = document.getElementById('inpEmail');
let SenhaAluno = document.getElementById('inpSenha');

let nomesAdd = ''
let idadesAdd = ''
let sexoAdd = ''
let objetivosAdd = ''
let emailAdd = ''
let senhaAdd = ''

let msgErro = document.getElementById('AvisoErroDados');


function VerificaCadastro(){
    
    nomesAdd = NomeAluno.value
    idadesAdd = IdadeAluno.value
    emailAdd = EmailAluno.value
    senhaAdd = SenhaAluno.value 
    objetivosAdd = ObjetivoAluno.value
    sexoAdd = SexoAluno.value
    // document.getElementById('btn-Principal').disabled = true


    vetorNomes.push(nomesAdd)
    vetorIdades.push(idadesAdd)
    vetorEmail.push(emailAdd)
    vetorSenhas.push(senhaAdd)
    
    RealizaCadastro()
    msgErro.innerHTML = ''
    alert('Cadastro realizado!')
    NomeAluno.value = ''
    IdadeAluno.value = ''
    EmailAluno.value = ''
    SenhaAluno.value = ''
    
    // if(nomesAdd || idadesAdd || emailAdd || senhaAdd == null && nomesAdd || idadesAdd || emailAdd || senhaAdd == ''){
        
    //     msgErro.innerHTML = 'Parece que faltam alguns campos a serem preenchidos :('
        
    // }
    // else{
        
        
    // }

    // vetorSexo.push(sexoAdd)
    
    // sexoAdd = i
    // for(i = 0; sexoAdd.length; i++){
        
    //     if(sexoAdd.checked = true){

    //         document.getElementById('btn-Principal').disabled = false
    //     }
    // }
    // vetorOjetivos.push(objetivosAdd)
    // localStorage.setItem('SexoAlunos', JSON.stringify(i))
    
    // localStorage.setItem('ObjetivosAlunos', JSON.stringify(vetorOjetivos))
}

function RealizaCadastro(){
    localStorage.setItem('NomesAlunos', JSON.stringify(vetorNomes))
    localStorage.setItem('IdadesAlunos', JSON.stringify(vetorIdades))
    localStorage.setItem('EmailAlunos', JSON.stringify(vetorEmail))
    localStorage.setItem('SenhaAlunos', JSON.stringify(vetorSenhas))

}
