var horas = new Date()
horaexata = horas.getHours()
var titulo = document.getElementById('saudacao')
var frase = document.getElementById('frase')
var imagem = document.getElementById('imagem1')
var quadro = document.getElementById('div_principal')
if (horaexata<12) {
    titulo.innerText='Bom-Dia'
    frase.innerText=`São ${horaexata} horas!`
     imagem.src='imagens/amanhecer.avif'
    quadro.style.backgroundColor='rgb(212, 0, 255)'
} else if(horaexata>=12 && horaexata<18) {
    titulo.innerText='Boa-Tarde'
    frase.innerText=`São ${horaexata} horas!`
    imagem.src='imagens/entardecer.webp'   
    quadro.style.backgroundColor='rgb(224, 224, 224)'
}else{
    titulo.innerText='Boa-Noite'
    frase.innerText=`São ${horaexata} horas!`
    imagem.src='imagens/anoitecer.jpg'   
}