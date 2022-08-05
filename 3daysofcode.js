function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
} 

let area = prompt("Qual área você deseja seguir? Digite F para Front-End ou B para Back-End.");

if (area == "F") {

        let linguagemF = prompt("Qual linguagem Front-End você deseja aprender? Digite R para React ou V para Vue.");
        if (linguagemF == "R") {
        } else if (linguagemF == "V") {} 

        let escolha = prompt("Você deseja seguir se especializando na área escolhida ou seguir desenvolvendo para se tornar Fullstack? Digite 1 para seguir na área escolhida ou 2 para se tornar desenvolvedor Fullstack");
        if (escolha == "1") {
            mostra("Parabéns! Você escolheu seguir se especializando");
        } else if (escolha == "2") {
            mostra("Parabéns! Você escolheu se tornar Fullstack")
        }
    }

if (area == "B") {

        let linguagemB = prompt("Qual linguagem Back-End você deseja aprender? Digite C para C# ou J para Java.");
        if (linguagemB == "C") {
        } else if (linguagemB == "J") {}

        let escolha = prompt("Você deseja seguir se especializando na área escolhida ou seguir desenvolvendo para se tornar Fullstack? Digite 1 para seguir na área escolhida ou 2 para se tornar desenvolvedor Fullstack");
        if (escolha == "1") {
            mostra("Parabéns! Você escolheu seguir se especializando");
        } else if (escolha == "2") {
            mostra("Parabéns! Você escolheu se tornar Fullstack")
        }
}

let totalTecnologias = parseInt(prompt("Quantidade de Tecnologias?"));
let tecnologias = 0;
while (tecnologias < totalTecnologias) {
    let nomeTecnologias = prompt("Qual tecnologia você gostaria de se especializar ou conhecer? Digite os nomes e no fim apresentarei para você um índice com elas.");
    tecnologias++;
    mostra(nomeTecnologias + ", ótima escolha");

}
