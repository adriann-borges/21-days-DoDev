// EXERCISE 01 - Criar uma algoritmo que recebe números e armazena em uma Array
alert("EXERCICIO 01|     SIGA AS INSTRUÇÕES DO PROMPT, TAMANHO DA ARRAY AUTOMÁTICO.")
let algoritmoArray = []
let continuar = true;
let posicaoArray = 0;
while (continuar) {
  let numeroInserido = Number(parseInt(prompt("Digite um número")))
  algoritmoArray[posicaoArray] = numeroInserido
  let desejaContinuar = prompt("Digite S caso queira continuar")
  if (desejaContinuar != "S") {
    continuar = false
  }

  posicaoArray++
}
console.log("Array resultante:", algoritmoArray);
// EXERCISE 02 - Criar um algoritmo que pede 5 números para o usuário, armazenar os números em uma array e exibir na ordem invertida

alert("EXERCICIO 02|     SIGA AS INSTRUÇÕES DO PROMPT, TAMANHO DA ARRAY DE 5 NÚMEROS. (ARRAY SERÁ EXIBIDA NA ORDEM INVERSA)")
let algoritmoDeCincoNumeros = []
let quantidadeDeNumeros = 5;
let posicaoArrayExercise02 = 4;
let continuarExercise02 = true
let qualNumeroDigitar = 1

while (continuarExercise02) {
  let numeroInseridoExercise02 = Number(parseInt(prompt("Digite o " + qualNumeroDigitar + "º número." )))
  algoritmoDeCincoNumeros[posicaoArrayExercise02] = numeroInseridoExercise02
  if (quantidadeDeNumeros != 1) {
    quantidadeDeNumeros--
  } else {
    continuarExercise02 = false
  }

  posicaoArrayExercise02--
  qualNumeroDigitar++
}
console.log("Array de cinco números (ordem inversa):", algoritmoDeCincoNumeros);

//EXERCISE 03 - Editar o código anterior mas agora o usuário escolhe quantos números ele deseja inserir.

alert("EXERCICIO 03|     SIGA AS INSTRUÇÕES DO PROMPT, TAMANHO DA ARRAY DEFINIDA PELO USUARIO (ARRAY SERÁ EXIBIDA NA ORDEM INVERSA)")
let algoritmoExercise03 = [];
let quantidadeEscolhidaUsuario = Number(prompt("Digite quantos números deseja inserir na Array"));
let qualNumeroDigitarExercise03 = 1

for (let i = 0; i < quantidadeEscolhidaUsuario; i++) {
  let numeroInseridoPeloUsuario = Number(prompt("Digite o " + qualNumeroDigitarExercise03 + "º número."));
  algoritmoExercise03.unshift(numeroInseridoPeloUsuario);
  qualNumeroDigitarExercise03++
}

console.log("Array resultante (ordem inversa):", algoritmoExercise03);

