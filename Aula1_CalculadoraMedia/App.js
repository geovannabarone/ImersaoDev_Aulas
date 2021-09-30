var nome = "Geovanna"

var n1 = 9
var n2 = 7
var n3 = 4
var n4 = 2

var NotaMédia = (n1 + n2 + n3 + n4)
var NotaFinal = NotaMédia / 4
var NotaFixada = NotaFinal.toFixed(0)

console.log("Bem vindo Aluno (a) "+ nome)
console.log("Sua nota final arredondada foi de " + NotaFixada)

if (NotaFixada >= 6) {
  result = "Sendo assim, você está aprovado, parabéns!";
} else {
  result = "Sendo assim, você está reprovado, sinto muito.";
}
console.log(result)


// Revisão: Variáveis, String, Console.log, to.fixed, operações matemáticas e concatenação (junção de string com variável, com +)

// Desafios: Colocar total geral e média OK / Colocar uma mensagem, de se a pessoa passou ou não OK / mudar estilo da página, ou imagem OK / tentar escrever na página, e não no console FAZER! / fazer conversor de temperaturas ou moedas FAZER! / conta inteira no console.log -> console.log((n1 + n2 + n3 + n4) / 4).toFixed(0)