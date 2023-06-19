let arr = [4,5,10,20,35,4,5]

console.log(arr.includes(5))
console.log(arr.find((el) => {
    return el > 10
}))
console.log(arr.findIndex((el) => {
    return el > 10
}))