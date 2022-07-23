function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verificar  os dados e ente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img  = document.createElement('img')
        img.setAttribute('id', 'foto') 


        
        if (fsex[0].checked){
            gênero ='Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'criancaH.webp')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'jovemH.webp')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoH.webp')
            }else{
                //idoso
                img.setAttribute('src', 'idosoH.webp')
            }

        } else if(fsex[1].checked){
            gênero ='Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'criancaM.webp')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'jovemM.webp')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoM.webp')
                
            }else{
                //idoso
                img.setAttribute('src', 'idosoM.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)//para aparecer a imagem

    }
}