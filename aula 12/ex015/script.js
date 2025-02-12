function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.volue > ano) {
        window.alert('[erro] verifique os dados e tente novamente!')
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'homem'
        if (idade >=0 && idade < 10){
            // criança
            img.setAttribute('src', 'foto bebe homem.webp')
        }else if (idade <23){
            // jovem
            img.setAttribute('src', 'foto jovem homem.webp')
        }else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'foto adulto homem.webp')
        }else {
            // idoso
            img.setAttribute('src', 'foto idoso homem.webp')
        }
       } else if (fsex[1].checked) {
        genero = 'mulher'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto bebe mulher.webp')
        }
        else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto jovem mulher.jpeg')
        }else if (idade < 50){
            // adulto
            img.setAttribute('src', 'foto adulto mulher.webp')
        } else {
            //idoso
            img.setAttribute('src', 'foto idoso mulher.webp')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

}