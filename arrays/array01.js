const arr = [0,0,0,0,1,2,3,4,'aa',true]

let soNumero = arr.every((el) => {
    return typeof el === "number"
})

let apenasUmNumero = arr.some((el) => {
    return typeof el === "number"
})

const arr1 = arr.filter((el, i, _arr) => {
    return typeof el === 'number'
})

const arr2 = arr1.filter((el) => {return el > 0})

arr.forEach((el, i) => {
    console.log(el, i)
})

const arr3 = arr1.map((el) => {
    return el * el
})

console.log(soNumero)
console.log(apenasUmNumero)
console.log(arr1)
console.log(arr2)
console.log('map', arr3)