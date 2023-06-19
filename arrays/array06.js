// let arr = [1,2,3,3]

// //console.log(arr.reverse())

// let j = 0
// let soma = arr.reduce((acumulador, atual, i, _arr) => {
//     console.log('i: ', i)
//     console.log('j: ', j++)
//     console.log('acumulador: ',acumulador,'--- atual: ', atual)
//     return acumulador + atual
// }, 0)

// console.log(soma)

// const nomes = ['daniel', 'maria', 'joana', 'joao']

// let nomesPorOrdem = nomes.reduce((nomes, nomeAtual) => {
//     let primeiraLetra = nomeAtual[0]
//     if(nomes[primeiraLetra]){
//         nomes[primeiraLetra]++
//     }else{
//         nomes[primeiraLetra] = 1
//     }

//     return nomes
// }, {})

// console.log(nomesPorOrdem)

const numeros = [1,3,4,1,4,5,4,5,6,6,3,8,9]

let numerosUnicos = numeros.reduce((num, currentNum) => {
    if(!num.includes(currentNum)){
        num.push(currentNum)
    }
    return num
}, [])

console.log(numerosUnicos)