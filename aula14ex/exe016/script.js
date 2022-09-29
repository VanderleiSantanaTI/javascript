function contar(){
    let ini = document.getElementById('texti')
    let fim = document.getElementById('textf')
    let passo = document.getElementById('textp')
    let res = document.getElementById('res')

    if (ini.Value.length == 0  || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados' )
    }else  {
        res.innerHTML = 'Contando: '
        let i =Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p)
             res.innerHTML += `${c}`
    }
}