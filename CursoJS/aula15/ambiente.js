let num = [8, 2, 9, 3]

console.log (num)

num[4] = 5 //adiciona um valor para array em alguma posição declarada entre os []
num.push(7) //Adiciona um valor para array no final
num.sort() //Coloca o array em forma crescente

console.log (num)

console.log (`O vetor tem ${num.length} posições`) //num.length é para ver o tamanho do array

let pos = num.indexOf(8) //Buscar algum numero do array num.indexOf(valor)

if (pos == -1){ //Quando o valor da -1 na busca de algum numero do array é porque ele não foi encontrado!
    console.log ('O valor não foi encontrado!') 
} else {
    console.log(`O valor 8 Está na posição ${pos}`)
}
