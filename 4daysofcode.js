function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let numeroPensado = Math.round(Math.random() * 10);
let tentativa = 1;

while (tentativa <= 3) {
    let chute = parseInt(prompt("Qual o seu chute?"));
    if (chute == numeroPensado) {
        mostra("Você acertou o número era, " + numeroPensado)
        break;
    } else {
        mostra("Você errou");
    } if (tentativa >= 3) {
        mostra("O número era, " + numeroPensado)
    }
    tentativa++;
}