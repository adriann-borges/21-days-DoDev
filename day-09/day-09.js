
// CONHECENDO SEU USUÁRIO - ATIVIDADE
let nome = prompt("Digite seu nome: ")
let idade = Number(prompt("Digite a sua idade: "))
let peso = Number(parseFloat(prompt("Digite seu peso: ")))
let altura = parseFloat(prompt("Qual sua altura?"))
let profissao = prompt("Qual sua profissão?")


console.log("Olá " + nome + ", você tem " + idade + " anos, é "  + profissao + ", tem " + altura + "m de altura, e pesa " + peso + "kg.")

if(idade >= 18){
    console.log("Está liberado para tomar umas geladas.")
}else {
    console.log("Sem gelada para você.")
}

// IDADE EM MESES, SEMANAS E DIAS
let ano = 365
let meses = 30
let semana = 7
let idadeEmMeses = idade * 12
let idadeEmSemnas = (ano / semana) * idade
let idadeEmDias = idade * ano
console.log("Sua idade em meses é: " + idadeEmMeses )
console.log("Sua idade em semanas é: " + parseInt(idadeEmSemnas) )
console.log("Sua idade em dias é: " + idadeEmDias )

// CALCULANDO IMC
let IMC = parseInt(peso / (altura * altura))
let categoriaIMC;

switch(true){
    case( IMC < 18.5):
    console.log("Você está na faixa de Magrez" + " e seu IMC é de " + IMC + "kg/2" )
        break;
    case (IMC >= 18.5 && IMC < 24.9):
        console.log("Você está no peso normal" + " e seu IMC é de " + IMC + "kg/2" )
        break;
    case (IMC >= 24.9 &&  IMC < 30):
        console.log("Você está com sobrepeso" + " e seu IMC é de " + IMC + "kg/2" )
        break;
    case (IMC > 30):
        console.log("Você está com obseidade" + " e seu IMC é de "  + IMC + "kg/2")
        break;


}

// DESCOBRINDO QUAL ANO A PESSOA NASCEU
let anoAtual = 2023
let anoQueNasceu = anoAtual - idade

console.log("Você nasceu no ano de: " + anoQueNasceu)

// EXIBIR ANOS VIVIDOS

let contagemAnos = 0
for(idade === anoQueNasceu; anoQueNasceu <= anoAtual; anoQueNasceu++){
    console.log(anoQueNasceu + " " + contagemAnos.toString() + " anos de idade.")
    contagemAnos++
}

