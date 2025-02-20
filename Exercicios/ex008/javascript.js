var bt=document.getElementById('botao')
bt.addEventListener('click',clicar)

function clicar() {
    var input1 = document.getElementById('inumero1')
    var input2 = document.getElementById('inumero2')
   
    if (Number(input1.value)>Number(input2.value)) {
        input1.style.backgroundColor='green'
        input2.style.backgroundColor='red'
        
    } else if (Number(input1.value)<Number(input2.value)) {
        input2.style.backgroundColor='green'
        input1.style.backgroundColor='red'
    } else {
       input2.style.backgroundColor='blue'
       input1.style.backgroundColor='blue'
    }
    
}


