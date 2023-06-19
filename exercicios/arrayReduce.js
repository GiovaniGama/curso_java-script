const numeros = [1,2,3,40,2213,23123,123123213]

function maiorNumero(num){
    return num.reduce((acumulador, numAtual) => {
        if(numAtual > acumulador){
            acumulador = numAtual
        }
        return acumulador
    }, 0)
}

function mediaNumero(num){
    const somaTotal =  num.reduce((acumulador, numAtual, i, _arr) => {
       return acumulador += numAtual
    }, 0)

    return somaTotal / num.length
}

console.log(maiorNumero(numeros))
console.log(mediaNumero(numeros))

const nomes = ['daniel', 'maria', 'joana', 'joao']

function concactName(names){
    return names.reduce((acumulador, valorAtual) => {
       return acumulador += valorAtual + ','
    }, '')
}

console.log(concactName(nomes))
