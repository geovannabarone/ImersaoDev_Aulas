function Converter1() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
    var elementoValorConvertidoEmReal = document.getElementById(
      "valorConvertidoEmReal"
    );
    var valorConvertidoEmReal = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertidoEmReal.innerHTML = valorConvertidoEmReal;
  }
  
  function Converter2() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmBitcoin = valorEmDolarNumerico * 0.000021;
    var elementoValorConvertidoEmBitcoin = document.getElementById(
      "valorConvertidoEmBitcoin"
    );
    var valorConvertidoEmBitcoin =
      "O resultado em bitcoin é BTC$ " + valorEmBitcoin;
    elementoValorConvertidoEmBitcoin.innerHTML = valorConvertidoEmBitcoin;
  }
  
  // Adicionar um botao para converter para real e converter para bitcoin OK EX2 / Fazer outros conversores FAZER / Converter o dolar em real + bitcoins OK EX1
  