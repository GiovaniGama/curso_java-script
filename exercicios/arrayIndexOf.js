const words = ['banana', 'maçã', 'laranja', 'abacaxi']
const targetWord = 'banana'

function findWordIndex(arrayWords, target){
    if(arrayWords.includes(target)){
        return arrayWords.indexOf(target)
    }
    return 'Não existe no array!'
}

const index = findWordIndex(words, targetWord)
console.log(index)

const numbers = [5, 10, 15, 20, 25]
const target = 15

function findNumberIndex(arrayNumbers, target){
    if(typeof target === "number" && arrayNumbers.includes(target)){
        return arrayNumbers.indexOf(target)
    }
    return "Nao é number ou nao existe no array"
}

const indexNumber = findNumberIndex(numbers, target)
console.log(indexNumber)