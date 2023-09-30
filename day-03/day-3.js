// Criação de variáveis e interação com operadores aritiméticos
let enunciado = "Utilize todos os operadores lógicos com os números 50 e 50"
let number1 = 50
let number2 = 50
let texto1 = "O resultado da soma é: "
let texto2 = "O resultado da subtração é: "
let texto3 = "O resultado da multiplicação é: "
let texto4 = "O resultado da divisão é: "
let texto5 = "O módulo (resto) é: "
console.log(enunciado)
console.log("                                ")
console.log (texto1, number1 + number2)
console.log (texto2, number1 - number2)
console.log (texto3, number1 * number2)
console.log (texto4, number1 / number2)
console.log (texto5, number1 % number2)
console.log( "                             ")
console.log("                                ")

//Entrada de dados e exercício
console.log("Exercício sobre entada de dados.")
console.log("                                ")
let nome = prompt("Insira seu nome:")
let idade = prompt("Insira a sua idade:")
let altura = prompt("Insira sua altura: ")
let peso = prompt("Insira seu peso:")
let IMC = (peso / (altura * altura))
console.log("Olá, " + nome + ", você tem " + idade + " anos e nasceu no ano de " + (2023 - parseInt(idade)) + ", mede " + altura + " pesa " + peso + "kg e seu IMC é de " + parseInt(IMC)) 

