function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
  
  // Criar botão de remover filme / Além de colocar imagem, colocar o nome também do filme / Guardar tudo o que foi adicionado em uma lista
  