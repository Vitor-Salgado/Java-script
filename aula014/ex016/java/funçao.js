function verificar(){
   var ini = document.getElementById('iinicio')
   var fim = document.getElementById('ifinal')
   var passo = document.getElementById('ipasso')
   var res = document.getElementById('res')
   if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length==0){
    window.alert('Erro falta dados')
   }else{
    res.innerHTML='Contando ...'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(p <=0){
        window.alert('Passo precisa ser maior que 1, utilizando passo1 ')
        p=1
    }
    if(i<f){
        for(var c = i; c <= f; c+=p){
        res.innerHTML+=` \u{1F449} ${c}`
        }
    } else {
        for(var c = i; c>=f ; c -= p){
            res.innerHTML+=`  \u{1f449} ${c}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
   }
}