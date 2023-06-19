const numbers = [1, 2, 3, 4, 5]

function doubleNumbers(arrayNumber) {
    let value = arrayNumber.map((el) => {
       return el * 2
    })
    return value
}

const doubled = doubleNumbers(numbers)
console.log(doubled)

const names = ['ana', 'joão', 'maria', 'pedro']

function capitalizeNames(arrayNames){
    let valueArray = arrayNames.map((el) => {
        return el.toUpperCase()
    })

    return valueArray
}

const capitalized = capitalizeNames(names)
console.log(capitalized)