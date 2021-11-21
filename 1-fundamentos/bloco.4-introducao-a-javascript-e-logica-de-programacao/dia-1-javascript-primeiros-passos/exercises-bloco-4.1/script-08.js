/* 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. */

const a = 35
const b = 27
const c = 60

console.log('const a = ' + a)
console.log('const b = ' + b)
console.log('const c = ' + c)

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log('true')
} else {
    console.log('false')
}