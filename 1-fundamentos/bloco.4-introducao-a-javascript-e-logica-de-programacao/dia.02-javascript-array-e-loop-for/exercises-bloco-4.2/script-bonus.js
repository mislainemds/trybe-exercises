// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

let arr = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for (let index = 0; index < arr.length; index += 1) {
  for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] > arr[i + 1]) {
    [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
  }
}  
}
console.log(arr) 
