let  num  = [5, 8, 4]
console.log(`Nosso vetor é o ${num}`)
num[3]=6//inserir o lavor 6 na 3° posição na lista
num.push(7)// adiciona um valor 7 na ultima posição 

console.log(`Nosso vetor atual é:  ${num}`)
console.log(`O número ${7} está na posição ${num.indexOf(7)}° `)
console.log(`o vator tem  ${num.length} posições`)
console.log(`o vetor em ordem ${num.sort()} `)

for (let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem ${num[pos]}`)
}

