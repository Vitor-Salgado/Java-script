function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Confira seus dados')
    } else {
        var fsex = document.getElementsByClassName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10 ){
                img.setAttribute('scr','imagens/criança-m.png')
            }else if(idade < 21){
                img.setAttribute('scr','imagens/adolescente-m.png')
            }else if (idade < 50){
                img.setAttribute('src','imagens/adulto-m.png')
            }else{
                img.setAttribute('src','imagens/idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10 ){
                img.setAttribute('scr','imagens/criança-f.png')
            }else if(idade < 21){
                img.setAttribute('scr','imagens/adolescente-f.png')
            }else if (idade < 50){
                img.setAttribute('src','imagens/adulto-f.png')
            }else{
                img.setAttribute('src','imagens/idoso-f.png')
            }

      res.style.textAlign='center'  
      res.innerHTML = `Detectamos  de ${idade} anos `
      res.appendChild(img)
    }
}
}