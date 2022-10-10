function fatorial(n)/*Parâmetro*/{
    if (n == 1)/*ação*/{
        return 1//retorno
    }else{
        return n*fatorial(n-1)//retorno
    }
}
console.log(fatorial(5))//chamada