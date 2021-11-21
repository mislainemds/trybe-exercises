/* 2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.*/

const a = 26
const b = 24

console.log("const a = " + a)
console.log("const b = " + b)

if (a > b) {
    console.log(a + " é maior que " + b)
}
else if (b > a) {
    console.log(b + " é maior que " + a)
}
else {
    console.log("[ERRO] números iguais")
}