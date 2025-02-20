
let botao =  document.getElementById('botao')
let paragrafo1 = document.getElementById('paragrafo1')
let paragrafo2 = document.getElementById('paragrafo2')
let paragrafo3 = document.getElementById('paragrafo3')
let paragrafo4 = document.getElementById('paragrafo4')
botao.addEventListener('click',calcular)

function calcular() {
    let numero=Number(document.getElementById('numero').value)
    paragrafo1.innerHTML=`<h6 >SOMA</h6>`
    paragrafo2.innerHTML=`<h6>SUBSTRAÇÃO</h6>`
    paragrafo3.innerHTML=`<h6>MULTIPLICAÇÃO</h6>`
    paragrafo4.innerHTML=`<h6>DIVISÃO</h6>`
    for (let cont = 0; cont <= 10; cont++) {
        let soma = numero+cont
        paragrafo1.innerHTML+=(`${numero} + ${cont} = ${soma} <br>`)
    }
    for (let cont = numero; cont <= numero+10; cont++) {
        let subtracao = cont-numero
        paragrafo2.innerHTML+=(`${cont} - ${numero} = ${subtracao} <br>`)
    }
    for (let cont = 0; cont <= 10; cont++) {
        let multiplicacao = numero*cont
        paragrafo3.innerHTML+=(`${numero} x ${cont} = ${multiplicacao} <br>`)
    }
    for (let cont = numero; cont <= numero*10; cont+=numero) {
        let divisao = cont/numero
        paragrafo4.innerHTML+=(`${cont} / ${numero} = ${divisao} <br>`)
    }

}