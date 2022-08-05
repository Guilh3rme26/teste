function pulaLinha () {
    document.write("<br>");
    document.write("<br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}


let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let comida = "";
let categoria = "";
let adicionar = "sim";

while (adicionar != "não") {
    adicionar = prompt("Você deseja adicionar itens à sua lista de compras?");

while (adicionar != "sim" && adicionar != "não") {
    ("Operação não reconhecida");
    adicionar = prompt("Você deseja adicionar itens à sua lista de compras?");

    if (adicionar === "não") {
        break;
    }
} 

comida = prompt("Qual comida deseja adicionar?");
categoria = prompt("Em qual categoria a comida se encaixa?");

    if (categoria === "frutas") {
        frutas.push(comida);
    } else if (categoria === "laticinios") {
        laticinios.push(comida);
    } else if (categoria === "congelados") {
        congelados.push(comida);
    } else if (categoria === "doces") {
        doces.push(comida);
    } else {
        alert("Categoria não pré-definida");
    }

}

mostra("Lista de compras: \n Frutas: " + frutas + "\n Laticinios: " + laticinios + "\n Congelados: " + congelados + "\n Doces: " + doces);