function pulaLinha () {
    document.write("<br>");
    document.write("<br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

var nome = prompt("Qual o seu nome?");
var idade = prompt(nome + ", quantos anos você tem?");
var linguagem = prompt(nome + ", qual linguagem de programação você está estudando?");

mostra(" Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!")

var estudar = prompt ("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO")

if (estudar == 1) {
    mostra("Muito bem! Continue estudando e você terá muito sucesso.")
} 

if (estudar == 2) {
    mostra("Ahh que pena... Já tentou aprender outras linguagens?")
}