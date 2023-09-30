// CRIAÇÃO DA TABUADA UTILIZANDO FOR

let tabuada = Number(prompt("Qual a tabuada?"))
console.log("Aqui está a tabuada do " + tabuada + " !")
for(contador = 0; contador <= 20; contador++){
    console.log(tabuada + " x " + contador + " = " + tabuada * contador )
}
console.log("                    ")

// Desafio 01 - Criar um algoritmo que recebe um valor , inteiro e positivo, e mostra no console uma contagem de 0 até o número escolhido
let numeroEscolhido = Number(parseInt(prompt("Digite um número inteiro e positivo")))
console.log("Contagem de 0 a " + numeroEscolhido + " !")
for (algoritmo = 0; algoritmo <= numeroEscolhido; algoritmo++){
    console.log(algoritmo)
}
console.log("                                ")

// Desafio 02 - Criar um algoritmo que realize a contagem de 5 em 5 até 50
console.log("Contagem até 50 de 5 em 5!")

for(let contagem = 5; contagem <= 50; contagem += 5){
    console.log(contagem)
}


// Desafio 03 - Refazer o código anterior na ordem inversa, ou seja, do 50 para o 5.

console.log("Contagem do 50 até o 5!")

for(let contagemInversa = 50; contagemInversa >= 5 ; contagemInversa -= 5){
    console.log(contagemInversa)
}