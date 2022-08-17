function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iidade')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){window.alert('[ERRO] Verifique os dados e tente novamente')
}else{
    var fsex = document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
        genero= 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','criança-m.png')
        }else if(idade < 16){
            //adolecente
            img.setAttribute('src','adolescente-m.png')
        }else if(idade < 30){
            //jovem adulto
            img.setAttribute('src','jovem-m.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','adulto-m.png')
        }else{
            //idooso
            img.setAttribute('src','idoso-m.png')
        }
    }else if(fsex[1].checked){
        genero= 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','criança-f.png')
        }else if(idade < 16){
            //adolecente
            img.setAttribute('src','adolescente-f.png')
        }else if(idade < 30){
            //jovem adulto
            img.setAttribute('src','jovem-f.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','adulto-f.png')
        }else{
            //idooso
            img.setAttribute('src','idoso-f.png')
        }
    }
    res.style.textAlign='center'
    res.innerHTML=`Detectamos ${genero} e tem ${idade}  anos`
    res.appendChild(img)
}
}

    