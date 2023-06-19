const arrayNumbers = [0,2,-2,3,-5,10,-20,-50]

function isPositive(element){
    return element >= 0
}

const resultFilter = arrayNumbers.filter((el) => {
    return isPositive(el)
})

console.log(resultFilter)


function filterEvenNumbers(numbers){
    let newArrayNumber = []

    newArrayNumber = numbers.filter((el) => {
        return el % 2 === 0
    })

    return newArrayNumber
}  

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = filterEvenNumbers(numbers)
console.log(evenNumbers)

const words = ['arara', 'banana', 'radar', 'maçã', 'reger'];

function filterPalindromes(words) {
    return words.filter((el) => {
        const reverWords = el.split('').reverse().join('')
        return reverWords === el
    })
}
const palindromes = filterPalindromes(words);
console.log(palindromes)
  