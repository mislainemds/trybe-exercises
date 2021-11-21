/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */

var chessPiece = "rainha"

switch (chessPiece.toLowerCase()) {
    case 'bispo': 
        console.log('Bisco movimento diagonal.')
    break;
    case 'peão':
        console.log('Peão movimenta-se apenas uma casa para frente, podem no primeiro movimento, ser duas casas.')
    break;
    case "rainha":
        console.log('A rainha movimenta-se em linha reta - verticalmente, horizontalmente ou diagonalmente.')
    break;
    case 'torre':
        console.log('Torre movimenta-se Horizontal e vertical.');
    break;
    case 'cavalo':
        console.log('Cavalo movimenta-se em "L" pode pular sobre as peças.');
    break;
    case 'rei':
        console.log('Rei movimenta-se uma casa apenas para qualquer direção.')
    break;
    default: 
    console.log('[ERRO] peça não existe')
    break;
}