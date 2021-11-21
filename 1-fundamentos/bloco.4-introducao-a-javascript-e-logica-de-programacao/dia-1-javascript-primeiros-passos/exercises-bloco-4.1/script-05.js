/* 6 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */
const anguloA = 80
const anguloB = 60
const anguloC = -6

if (anguloA + anguloB + anguloC === 180) {
    console.log('True')
} else if (anguloA <=0 || anguloB <=0 || anguloC <= 0) {
    console.log('[ERRO] ângulos não condizentes com o de um triangulo')
} else {
    console.log('False')
}
