// Comparadores lógicos (=== | !== | > ou <) e escopo.

let nome = (prompt("Insira seu nome:"))
let idade = Number(prompt("Insira sua idade:"))

if(idade >= 18){
    console.log("Você é maior de idade.")

}else{
    console.log("Você precisa ser maior de idade para acessar!")

}

console.log("")

// Operadores E / OU (&& e ||)
let altura = Number(parseFloat(prompt(" Insira sua altura:")))
let alturaMedia = parseFloat("1.75")

if(altura === alturaMedia &&  nome === "Adrian" ){
    console.log("Olá, " + nome + " vejo que você está na altura média brasileira!")

}else{
    console.log("Você não é o Adrin E não tem 1,75")
}
if(altura === alturaMedia || nome === "Adrian"){
    console.log("Seu nome é Adrian ou você tem 1,75")

}else{
    console.log("Você não é o Adrian e não tem 1,75")
}