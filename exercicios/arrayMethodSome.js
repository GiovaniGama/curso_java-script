const arrSome = [1,2,3,-4]

function isNegative(element){
    return element < 0
}

const resultIsNegative = arrSome.some((el) => {
    return isNegative(el)
})

console.log(resultIsNegative)

const strings = ["a", "abc", "abcd"]

function isThreeCharString(element){
    return element.length === 3
}

const resultLenghtString = strings.some((el) => {
    return isThreeCharString(el)
})

console.log(resultLenghtString)

const pairNumber = [2,4,6,9]

function isPairNumber(element){
    return element % 2 === 0
}

const resultPairNumber = pairNumber.some((el) => {
    return isPairNumber(el)
})


console.log(resultPairNumber)