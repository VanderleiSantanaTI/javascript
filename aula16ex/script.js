let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valosres = []


function isNumero(n){
   if (Number(n) >= 1 && Number(n) <= 100){
    return true
   } else{
    return false
   }

}

function inLista(n, l){
    // (-1) significa que o valor não foi encontrado
    if (l.indexOf(Number(n)) !=  -1){
         return true
    }else{
        return  false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valosres)){
         valosres.push(Number(num.value))
         let item =document.createElement('option')
         item.text = `Valor ${num.value}  adcionado.`
         lista.appendChild(item)
    }  else {
        window.alert('Valor inválido ou já encontrado na lista.')
               
    }
    num.value = "" 
    num.focus()
    
}

function finalizar(){
    if(valosres.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let maior  = valosres[0]
        let menor  = valosres[0]
        let  soma  = 0
        let  media = 0
        for(let pos in valosres){
            soma += valosres[pos]           
            if (valosres[pos] > maior)
                maior = valosres[pos]
            if (valosres[pos] < menor)
                menor  = valosres[pos]         
        }
        res.innerHTML =``
        media += (soma/valosres.length)
        res.innerHTML += `<p>Ao todo, temos  ${valosres.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado fio ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado fio ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos números é ${media}.</p>`
        

}
}
