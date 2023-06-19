function persistence(num) {
    let count = 0;

    for (count; num >= 10; count++) {
        let digits = Array.from(String(num), Number)
        num = digits.reduce((product, digit) => product * digit)
    }

    return count
}


console.log(persistence(39));