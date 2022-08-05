function soma (primeiroNumero, segundoNumero) {
    primeiroNumero = parseInt(prompt ("Insira o primeiro número? "));
    segundoNumero = parseInt(prompt ("Insira o segundo número"));
    total = primeiroNumero + segundoNumero;
    alert(total)
}

function subtracao (primeiroNumero, segundoNumero) {
    primeiroNumero = parseInt(prompt ("Insira o primeiro número? "));
    segundoNumero = parseInt(prompt ("Insira o segundo número"));
    total = primeiroNumero - segundoNumero;
    alert(total)
}

function multiplicacao (primeiroNumero, segundoNumero) {
    primeiroNumero = parseInt(prompt ("Insira o primeiro número? "));
    segundoNumero = parseInt(prompt ("Insira o segundo número"));
    total = primeiroNumero * segundoNumero;
    alert(total)
}

function divisao (primeiroNumero, segundoNumero) {
    primeiroNumero = parseInt(prompt ("Insira o primeiro número? "));
    segundoNumero = parseInt(prompt ("Insira o segundo número"));
    total = primeiroNumero / segundoNumero;
    alert(total)
}

function exponenciacao (primeiroNumero, segundoNumero) {
    primeiroNumero = parseInt(prompt ("Insira o primeiro número? "));
    segundoNumero = parseInt(prompt ("Insira o segundo número"));
    total = primeiroNumero ** segundoNumero;
    alert(total)
}

function radiciacao (primeiroNumero) {
    primeiroNumero = parseInt(prompt ("Insira o primeiro número? "));
    total = Math.sqrt(primeiroNumero)
    alert(total)
}

function Sair () {
    while (escolha === "sair")
    {
        Sair();
        break;
    }

}

let escolha = "";


while (escolha != "sair") { 
    escolha = prompt("Qual operação você deseja fazer? soma, subtração, multiplicação, divisão, exponenciação, radiciacão ou sair");
    if (escolha != "soma" && escolha != "subtracao" &&  escolha != "multiplicacao" &&  escolha != "divisao" &&  escolha != "exponenciacao" && escolha != "radiciacao" && escolha != "sair") {
        alert("Operação não reconhecida")
    }
switch (escolha) {
    case "soma":
        soma();
        break;
    case "subtracao":
        subtracao();
        break;
    case "multiplicacao":
        multiplicacao();
        break;
    case "divisao":
        divisao();
        break;
    case "exponenciacao":
        exponenciacao();
        break;
    case "radiciacao":
        radiciacao();
        break;    
    case "sair": 
        Sair();
        break;
}
}


