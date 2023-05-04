//CODIGO AQUI

//------------------> Operadores aritméticos
let saldo = 15
let invest = 3.4
saldo += 22.40
saldo -= 12.34
saldo /= 2
saldo *= invest
let troco = saldo % 3

console.log(saldo)
console.log("Seu saldo em reais é é: ", saldo.toLocaleString('pt-br',{style:'currency', currency: 'BRL'}))
console.log("Troco pro chiclete é: ", troco.toLocaleString('pt-br',{style:'currency', currency:'BRL'}))


//Operadores relacionais-------------------------->

const comparacao = 5 === 5
//console.log(comparacao)

const comparacao2 = 5 !== 5
//console.log(comparacao2)

const comparacao3 = 5 !== '5'
//console.log(comparacao3)

const comparacao4 = 5 === 'cinco'
//console.log(comparacao4)

const comparacao5 = typeof 5 === typeof 20
console.log(comparacao5)

const comparacao6 = typeof "5" === typeof "20"
console.log(comparacao6)


//Operadores relacionais----------------------->
let a = 3
let b = 4

console.log(a===b)
console.log(a<=b)
console.log(a>b)
console.log(a<b)
