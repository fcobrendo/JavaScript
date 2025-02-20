/* var num = 0
//Primeiro Testa e Depois executa o bloco
while (num<11) {
    console.log(num)
    num+=1
}
console.log('Condição encerrada!')

//Primeiro executa o bloco depois testa
num=12
do {
    console.log(num)
    num++
} while (num<11)
console.log('Condição Encerrada') */

document.getElementById('botao').addEventListener('click',function () {
    for (let c = 0; c < 11; c++) {
        document.writeln(c);
    }
})