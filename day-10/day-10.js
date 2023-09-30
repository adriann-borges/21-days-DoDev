// COLETANDO INFORMALÇÕES 
do {
    let nomeFuncionario = prompt("Informe seu nome: ")
    let idadeFuncionario = Number(parseInt(prompt("Informe sua idade: ")))
    var salarioAtual = parseFloat(prompt("Insira seu salário: "))
    console.log("Nome: " + nomeFuncionario + " Idade: " + idadeFuncionario + " Salário atual: R$" + salarioAtual + ",00")
    let = digitouCorretamente = prompt("Você digitou todas as informações corretamentes? (S/N)")
}while(digitouCorretamente === "N")

// PREVISÃO DO SALÁRIO NOS PRÓXIMOS 10 ANOS

let anoInicial = 2023
let anoFinal = 2033
let aumento = 0.015
for(let ano = 1 ; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *=2
    console.log((2023 + ano) + " = R$ " + parseInt(salarioAtual))
}