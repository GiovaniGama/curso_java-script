let arr = [1,2,3,4,5]

let teste = arr.push(11,12,13)
let ultimoItem = arr.pop()

let primeiroItem = arr.shift()
arr.unshift([1,2])

let arr2 = arr.slice(2,5)

let arr3 = arr.splice(2, 4, "ola mundo")

console.log(primeiroItem)
console.log(teste)
console.log(arr)
console.log(ultimoItem)
console.log(arr2)
console.log(arr3)
