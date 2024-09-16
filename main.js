const jogadas = ["pedra", "papel", "tesoura"]

const listaJogadas = jogadas.map(jogada => jogada)

function decideGanhador(jogador1, jogador2, regraVencedor) {
    return regraVencedor(jogador1, jogador2)
}  

const regra = (jogador1, jogador2) => {
    if (jogador1 === jogador2) return "Ninguém ganhou! Deu empate :)"
    console.log(jogador1, jogador2)
    if ((jogador1 === "pedra" && jogador2 === "tesoura") || 
        (jogador1 === "tesoura" && jogador2 === "papel") ||
        (jogador1 === "papel" && jogador2 === "pedra")) {
            return "Parabéns! Você venceu essa rodada!!!"
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
        } else if (vencedor === "Parabéns! Jogador 2 essa rodada venceu!!!") {
            jogador2Vitorias++
        }
        console.log(jogador1Vitorias, jogador2Vitorias)
        return {jogador1Vitorias, jogador2Vitorias}
    }
}

const atualizarPlacar = criarPlacar()

function jogar() {
        const jogador1Escolha = document.getElementById('escolhaJogador1').value.toLowerCase().trim()
        console.log(jogador1Escolha)

        if (jogador1Escolha.toLowerCase() === 'sair') {  // Não precisamos mais
            return console.log("Jogo finalizado. Bye bye :)")
        }
        
        if (!listaJogadas.includes(jogador1Escolha)) {
            alert("hm, parece que algo deu errado. Digite novamente.")
        }
        
        const jogador2Escolha = listaJogadas[Math.floor(Math.random() * listaJogadas.length)]
        document.getElementById('escolhaJogador2').innerHTML = `${jogador2Escolha}`
        console.log(`O jogador 2 escolheu ${jogador2Escolha}`)
        
        const vencedor = decideGanhador(jogador1Escolha, jogador2Escolha, regra)
        document.getElementById('resultado').innerHTML = `${vencedor}`
        console.log(`ATENCION PARA O RESULTADO: ${vencedor}`)
        
        const {jogador1Vitorias, jogador2Vitorias} = atualizarPlacar(vencedor)   
        console.log(`Placar: Jogador 1 ${jogador1Vitorias}, Jogador 2: ${jogador2Vitorias}`)
        document.getElementById('placar').textContent = `${jogador1Vitorias} : ${jogador2Vitorias}`
    }