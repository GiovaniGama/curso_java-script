let numbers = [10,20,30,40,50]
let refenceValue = 10;

function isGreaterThan(number, refenceValue){
    return number > refenceValue
}

const resultOfArray = numbers.every((number) => {
    return isGreaterThan(number, refenceValue)
})

console.log(resultOfArray)


const elements = ["a","b","c"]

function isString(item){
    return typeof item === "string"
}

const resultIsString = elements.every((el) => {
    return isString(el)
})

console.log(resultIsString)

const arrNumbers = [-2,-3,10,20,-30,-40,-20,30]

function isPositiveNumber(element){
    return element > 0
}

const resultPositiveNumbers = arrNumbers.every((el) => {
    return isPositiveNumber(el)
})

console.log(resultPositiveNumbers)