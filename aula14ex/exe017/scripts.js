function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let nu = Number(num.Value)
    if (nu == 0){
       window.alert('Por favor, digite um número!')
    } else {
       let n = Number(num.value)
       let c =1
       tab.innerHTML = ''
       while (c<= 20){
           let item = document.createElement('option')// cria ítens dinâmicos
           item.text = ` ${n} x ${c} = ${n*c}`
           item.value =`tab${c}`
           tab.appendChild(item) //adicionar um elemento filho
           c++
    }
}
}