//{}object
let amigo = {
 nome:'vanderlei',
 sexo:'M',
 peso:  85.4,
 engordar(p=0){
     console.log('Engordou')
     this.peso += p // acrescenta peso no objeto peso
 }}

amigo.engordar(0)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

   

