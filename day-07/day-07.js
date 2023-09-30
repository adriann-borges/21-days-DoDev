//CALCULADORA UTILIZANDO SWITCH CASE (EXERCÍCIO 01)

console.log("Calculadora que realiza operação entre dois números.")
console.log("                               ")

//SOLICITANDO INFORMAÇÕE

let numero1 = Number(prompt(" Insira o primeiro número:"))
let operacao = prompt("Insira qual operação deseja usar: (soma (+) | substração (-) | divisão (/) | multiplicação (*)")
let numero2 = Number(prompt("Insira o segundo número:"))

//UTILIZANDO SWITCH CASE PARA RALZIAR AS OPERAÇÕES DE ACORDO COM O SINAL INSERIDO.
switch(operacao){
    case "+":
        console.log("A soma dos números é de: " + numero1 + numero2)
        break;
    case "-":
        console.log("A subtração dos números é de: " + numero1 - numero2)
        break;
    case "/":
        console.log("A divisão dos números é de: " + numero1 / numero2)
        break;
    case "*":
        console.log("A multiplicação dos números é de: " + numero1 * numero2)
        break;
    default:
        console.log("Erro, tente novamente.")
}


