var num = 0
//Primeiro Testa e Depois executa o bloco
while (num<11) {
    console.log(num)
    num+=1
}
console.log('Condição encerrada!')
num=0
//Primeiro executa o bloco depois testa
do {
    console.log(num)
} while (num<11)
console.log('Condição Encerrada')