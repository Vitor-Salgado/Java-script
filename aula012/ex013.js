var agora = new Date()
var semana= agora.getDay()

switch(semana){
    case 0:
    console.log('Domingo')
    break

    case 1:
    console.log('Segunda')
    break

    case 2:
    console.log('Terça')
    break
    
    case 3:
    console.log('quarta')
    break

    case 4:
    console.log('Quinta')
    break

    case 5:
    console.log('Sexta')
    break

    case 6:
    console.log('Sabado')
    break

    default:
    console.log('Erro esse dia nao existe')
    break
}