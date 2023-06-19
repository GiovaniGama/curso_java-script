function sumValues() {
    const arraySumValue = Array.from(arguments)

    return arraySumValue.reduce((accumatorValue, currentValue) => {
        return currentValue + accumatorValue
    }, 0)
}

function avarageValues() {
    return sumValues(...arguments) / arguments.length
}

console.log(avarageValues(1, 2, 3))
