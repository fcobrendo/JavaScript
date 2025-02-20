let mostrarcontagem = document.getElementById('contagem')
let botao = document.getElementById('botao')
botao.addEventListener('click',contar)
function contar() {
    mostrarcontagem.innerText='...'
    let num1 = Number(document.getElementById('numero1').value) 
    let num2 = Number(document.getElementById('numero2').value)
    let intervalo = Number(document.getElementById('intervalo').value) 
    console.log(num1)
    console.log(num2)
    if (num1>num2 || intervalo<=0) {
        mostrarcontagem.innerText='Impossivel Contar'
        
    }else{
        for (let cont = num1; cont <=num2; cont+=intervalo) {
            //Limpa o conteudo de ... caso exista
            if (mostrarcontagem.innerText==='...') {
                mostrarcontagem.innerText=''
            }
            mostrarcontagem.innerText+='  '+num1
            num1+=intervalo
        }
    }
   
}