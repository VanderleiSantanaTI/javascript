function carregar() {

    var msg = window.document.getElementById('msg')//isa o id  msg
    var img = window.document.getElementById('imagem')// usa o id imagem
    var data = new Date()  // atribui Data a data
    var hora = data.getHours()// define a data em horas
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if( hora >= 0 && hora < 12){
        //BOM DIA
        img.src  = 'manha.webp'
         document.body.style.background = '#f2EBD8'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src='tarde.webp'
        document.body.style.background = '#E8AB62'
    }else{
        //BOA NOITE
        img.src = 'noite.webp'
        document.body.style.background = '#2F5269'
    }
}