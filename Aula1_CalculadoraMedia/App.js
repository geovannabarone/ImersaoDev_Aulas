var nome = "Geovanna"

var n1 = 9
var n2 = 7
var n3 = 4
var n4 = 2

var NotaMédia = (n1 + n2 + n3 + n4)
var NotaFinal = NotaMédia / 4
var NotaFixada = NotaFinal.toFixed(0)

var elementoBemVindo = document.getElementById("bem-vindo")
var valorBemVindo = "Bem vindo Aluno (a), " + nome;
elementoBemVindo.innerHTML = valorBemVindo

var elementoNota = document.getElementById("nota")
var valorNota = "As suas notas foram, no 1º, 2º, 3º e 4º bimestres respectivamente, " + n1 + " ," + n2 + " ," + n3 + " e " + n4 + ". " + "Sendo assim, sua média foi de " + NotaFixada + ". "
elementoNota.innerHTML = valorNota

var elementoResultadoNaTela = document.getElementById("resultado");
if (NotaFixada >= 6) {
  resultado.innerHTML = "Considerando que a média é 6, você está aprovado (a) parabéns!";
} else {
  resultado.innerHTML = "Considerando que a média é 6, você está reprovado (a), sinto muito.";
}

// Revisão: Variáveis, String, Console.log, to.fixed, operações matemáticas e concatenação (junção de string com variável, com +)

// Desafios: Colocar total geral e média OK / Colocar uma mensagem, de se a pessoa passou ou não OK / mudar estilo da página, ou imagem OK / tentar escrever na página, e não no console OK / fazer conversor de temperaturas ou moedas FAZER! / conta inteira no console.log -> console.log((n1 + n2 + n3 + n4) / 4).toFixed(0) // FAZER UM: INSIRA SEU NOME (MATHEUS E GEOVANNA) E AI DEPENDENDO DO NOME QUE COLOCAR, DAI DAR A NOTA.