function tabela(){
    var num = document.getElementById('inum')
    var res = document.getElementById('res')
    if(num.value.length==0){
        window.alert('necessario preencher o campo numero')
    } else{
        let n = Number(num.value)
        let c = 1
        res.innerHTML=''
        while(c <= 10){
            let item = document.createElement('option')
            item.text=`${n}x${c}=${n*c}`
            item.value=`res${c}`
            res.appendChild(item)
            c++
        }
}}