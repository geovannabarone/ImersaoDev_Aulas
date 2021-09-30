var tentativas = 3;
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Na mosca, que sorte!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Esqueceu que é só de 0 a 10?";
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    resultado.innerHTML =
      "Tenta um pouco menos... Você ainda tem " + tentativas + " tentativas!";
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    resultado.innerHTML =
      "Número baixo, aumenta um pouco! Mas calma, você ainda tem " +
      tentativas +
      " tentativas!";
  }
  if (tentativas <= 0) {
    resultado.innerHTML =
      "Suas tentativas acabaram, tenta de novo depois, quem sabe você tem mais sorte. O número secreto era " +
      numeroSecreto;
  }
}

// Desafios: Colocar número de tentativas, e na terceira você fala o valor secreto OK / Mensagem: dar dica, falando que o numero que voce tentou é maior ou menor do que o numero secreto OK / Pesquisar sobre a diferença dos "=" OK / TENTAR CRIAR UM BOTAO "JOGAR NOVAMENTE"
