// APRENDENDO SOBRE FUNÇÃO (CONHECIMENTO BÁSICO DE ESTRUTRA)

let nomeUssuario = prompt("Qual seu nome?")
let idadeUsuario = Number(parseInt(prompt("Qual a sua idade?")))

function idade (i){
   if(i >= 18){
    return "acesso permitido"

   }else{
    return "acesso negado"
   }
}

let functionIdade = idade(idadeUsuario)

console.log("Olá " + nomeUssuario + ", você tem " + idadeUsuario + " e por isso teve seu " + functionIdade + "!")