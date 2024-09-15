const jogadas = ["pedra", "papel", "tesoura"]

const listaJogadas = jogadas.map(jogada => jogada)

function decideGanhador(jogador1, jogador2, regraVencedor) {
    return regraVencedor(jogador1, jogador2)
}  

const regra = (jogador1, jogador2) => {
    if (jogador1 === jogador2) return
    "Ninguém ganhou! Deu empate :)"
    if ((jogador1 === "pedra" && jogador2 === "tesoura") || 
        (jogador1 === "tesoura" && jogador2 === "papel") ||
        (jogador1 === "papel" && jogador2 === "pedra")) {
            return "Parabéns! Jogador 1 venceu essa rodada!!!"
        } else {
            return "Parabéns! Jogador 2 essa rodada venceu!!!"
        }
}

function criarPlacar() {
    let jogador1Vitorias = 0
    let jogador2Vitorias = 0

    return function(vencedor) {
        if (vencedor === "Parabéns! Jogador 1 venceu essa rodada!!!") {
            jogador1Vitorias++
        } else if (vencedor === "Parabéns! Jogador 2 venceu essa rodada!!!") {
            jogador2Vitorias++
        }
        return {jogador1Vitorias, jogador2Vitorias}
    }
}

const atualizarPlacar = criarPlacar()

function jogar() {
    try {
        const jogador1Escolha = prompt("Vamos Jogar? Escolha Pedra, paapel ou tesoura (ou 'sair' para finalizar):").trim()
        if (jogador1Escolha.toLowerCase() === 'sair') {
            console.log("Jogo finalizado. Bye bye :)")
            return
        }
    }
}

const padronizandoEscolha = jogador1Escolha.charAt(0).toUpperCase() + jogador1Vitorias.slice(1).toLowerCase()

if (!listaJogadas.includes(padronizandoEscolha)) {
    console.log("hm, parece que algo deu errado. Escolha novamente.")
    return jogar()
}

const jogador2Escolha = listaJogadas[Math.floor(Math.random() * listaJogadas.length)]
console.log("O jogador 2 escolheu ${jogador2Escolha}")

const vencedor = ganhador(padronizandoEscolha, jogador2Escolha, regra)
console.log("ATENCION PARA O RESULTADO: ${vencedor}")

const {jogador1Vitorias, jogador2Vitorias} = atualizarPlacar(vencedor)
console.log("Placar: Jogador 1 ${jogador1Vitorias}, Jogador 2: ${jogador2Vitorias}\n")

jogar()  {catch (error) {
    console.error("hmm, parece que ocorreu um erro inesperado.\n Tente novamente em outro momento :)")
    }
}

jogar()
