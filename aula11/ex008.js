var vel = 90
console.log(`Seu carro está a ${vel}Km/h`)
if (vel > 60){
    console.log(`Você ultrapassou em ${((vel/60-1)*100).toFixed(1)}% da velociade permitida, multado!`)
}else
{
    console.log(`Boa viagem e dirija com segurança!`)
}
console.log(`*-*-`*10)
console.log(`CONTRON - sua responsabilidade salva vidas`)