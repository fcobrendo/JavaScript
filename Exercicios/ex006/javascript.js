var titulo = document.getElementById('area')
titulo.addEventListener('click', clicar)
titulo.addEventListener('mouseenter',entrar)
titulo.addEventListener('mouseout',sair)
function clicar() {
    titulo.style.backgroundColor='blue'
    titulo.innerText='Voce clicou aqui'
}
function entrar(){
    titulo.style.backgroundColor='red'
    titulo.innerText='Mouse dentro da Div'
}
function sair(){
    titulo.style.backgroundColor='green'
    titulo.innerText='Voce saiu da div'
}