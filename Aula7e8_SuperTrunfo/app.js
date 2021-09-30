var carta1 = {
    nome: "Bulbasauro",
    imagem:
      "https://i.pinimg.com/originals/af/7c/19/af7c1907e3d2e5f142b81ad6a667fd5c.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Darth Vader",
    imagem:
      "https://img.elo7.com.br/product/original/2CD8E1D/darth-vader-lapisepapel.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Shiryu de dragão",
    imagem:
      "https://img.elo7.com.br/product/zoom/2B30956/poster-quadro-shiryu-de-dragao-30x42cm-nerd.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    // var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    // var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      HTMLResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      HTMLResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      HTMLResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = HTMLResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    //divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  // vou criar o super trunfo da dona dilma, com 7 cartas, uma para cada dia da semana. Itens: doses de pinga com coca, horas no bingo, horas na ginástica e intensidade do 'r'
  
  // desafios: dar alguma destinacao para o caso de nao selecionar nada ao clicar em jogar / adicionar diversas cartas / o 'exibir carta', exibir tanto da carta quanto do jogador, sem repetir o codigo /
  