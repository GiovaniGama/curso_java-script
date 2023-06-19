const arrayWords = ['gato', 'cachorro', 'elefante', 'leao']

function countLetters(words){
    let letterCounts = []
    words.forEach((el) => {
        letterCounts.push(el.length)
    })
    return letterCounts
}

const counts = countLetters(arrayWords)

console.log(counts)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getEvenNumbers(numbers){
    let evenNumber = []
    numbers.forEach((el) => {
        if(el % 2 === 0){
            evenNumber.push(el)
        }
    })
    return evenNumber
}

const even = getEvenNumbers(numbers)
console.log(even)