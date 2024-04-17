var idade = 16
console.log (`Você tem ${idade} anos`)

if (idade < 16) {
    console.log("Você ainda não tem idade para votar!")
} else if (idade < 18  || idade > 65){ // Se não, Se a idade for menor que 18, OU idade maior que 65, mostre: "No Brasil, com essa idade, você vota opcionalmente!"
    console.log("No Brasil, com essa idade, você vota opcionalmente!")
} else {
    console.log("No Brasil, com essa idade, seu voto é obrigatório!")
} 