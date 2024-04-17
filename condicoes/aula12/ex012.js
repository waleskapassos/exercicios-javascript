//CONDIÇÃO ANINHADA

var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

if (hora < 12) {
    console.log (`Olá, bom dia!`)
} else if (hora <= 1) {
    console.log (`Olá, boa tarde!`)
} else {
    console.log (`Olá, boa noite!`)
}

console.log (`Agora são exatamente  ${hora}:${minutos} hs.`)