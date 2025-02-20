/*var dia = new Date()
diasemana = dia.getDay()

switch (diasemana) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sabado')
        break;    
    default:
        console.log('Invalido')
        break;
}*/
var hora = new Date()
horadodia = hora.getHours()
var titulo = document.getElementById('saudacao')
if (horadodia<12) {
    titulo.innerText='Bom-Dia'
} else if(horadodia>=12 && horadodia<=18){
    titulo.innerText='Boa-Tarde'
}else{
    titulo.innerText='Boa-Noite'
}
