/* 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const a = 36
const b = 24
const c = 60

console.log('const a = ' + a)
console.log('const b = ' + b)
console.log('const c = ' + c)

if (a > b && a > c) {
    console.log(a + " é maior que " + b + " e " + c);
}
else if (b > a && b > c) {
    console.log(b + " é maior que " + a + " e " + c);
}
else {
    console.log(c + " é maior que " + a + " e " + b);
}