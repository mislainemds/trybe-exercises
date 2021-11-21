// 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;
//let arr = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

function array (arr) {
  for (let index = 0; index < arr.length - 1; index += 1) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] < arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
        }
    }  
  }
  return arr
}
console.log(array([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))