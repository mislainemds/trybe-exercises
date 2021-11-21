// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let arr = []
for (let i = 1; i <= 25; i += 1) {
    arr.push(i) 
}

console.log(arr);

for (let index = 0; index < arr.length; index += 1) {
    let division = arr[index] / 2
    console.log(division)
}
