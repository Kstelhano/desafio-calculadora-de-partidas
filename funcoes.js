// 1. Declaramos as variaveis para adjudicar valores. 
let vitoriasTotais = 0
let derrotasTotais = 5 

function calcularRank(vit, der) {
    // 2. Fazemos o cálculo aqui dentro. 
    let saldo = vit - der 
    let nivel = ""

    // 3. Usamos o 'if' e comparamos com as vitórias
    if (vit <= 0) {
        nivel = "Morto" // 4. Incluimos mais um nível considerando que o herói pode ter vitorias zero.
    } else if (vit <= 10) {
        nivel = "Ferro"
    } else if (vit <= 20) {
        nivel = "Bronze"
    } else if (vit <= 50) {
        nivel = "Prata"
    } else if (vit <= 80) {
        nivel = "Ouro"
    } else if (vit <= 90) {
        nivel = "Diamante"
    } else if (vit <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    // 4. Exibimos a mensagem usando o saldo que calculamos no passo 2
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)
}

// 5. Chamamos a função para que funcione. 
calcularRank(vitoriasTotais, derrotasTotais)