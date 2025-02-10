var bt = document.getElementById('btsomar')
bt.addEventListener('click',somar)

function somar(){
    var n1 = Number(document.getElementById('ivalor1').value)
    var n2 = Number(document.getElementById('ivalor2').value) 
    var res = document.getElementById('resultado') 
    var soma = n1+n2
    res.innerHTML=`Resultado: ${soma}`
    document.getElementById('txtres').value=soma
}

