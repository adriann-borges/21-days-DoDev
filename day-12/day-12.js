// AVALIAÇÃO DA TURMA
let nomesDosAlunos = []
let notaDosAlunos = []
let condicaoTurma = true
let numeroDeAlunos = 1
let contador = 0

while (condicaoTurma) {
    let perguntaNomeDosAlunos = prompt("Qual o nome do " + numeroDeAlunos + "º aluno(a)")
    let perguntaNotaDosAlunos = prompt("Qual a nota do " + numeroDeAlunos + "º aluno(a)")
    nomesDosAlunos[contador] = perguntaNomeDosAlunos
    notaDosAlunos[contador] = perguntaNotaDosAlunos
    let opcaoContinuar = prompt("Desjea continuar? Insira S para sim e N para não.")
    if(opcaoContinuar != "S"){
        condicaoTurma = false
    }
    contador++
    numeroDeAlunos++

}

for (let i = 0; i < nomesDosAlunos.length; i++) {
    console.log("Nome do aluno: " + nomesDosAlunos[i] + " | " + " Nota: " + notaDosAlunos[i])
}

let somaNotas = 0
for(let i = 0; i < parseInt(notaDosAlunos.length); i++){
    somaNotas += parseInt(notaDosAlunos[i])
}
let media =  somaNotas / notaDosAlunos.length
console.log("A soma total das notas: " + somaNotas)
console.log("A média é de: " + media)

//CONCESSIONÁRIA

let modelo = []
let anos = []
let valores = []
let posicaoArray = 0
let sairWhile = true

while (sairWhile) {
    modelo[posicaoArray] = prompt("Digite o modelo do veículo")
    anos[posicaoArray] = prompt("Digite o ano do veículo")
    valores[posicaoArray] = prompt("Digite o valor do veículo")
    let addVeiculo = prompt("Deseja adcionar mais um veículo? (S/N)")
    if(addVeiculo != "S"){
        sairWhile = false
    }
    posicaoArray++
}

for (let index = 0; index < modelo.length; index++) {
    console.log("Modelo: " + modelo[index] + " " + "Ano: " + anos[index] + " " + "valor: " + valores[index])
    
}
