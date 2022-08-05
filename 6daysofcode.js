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
let remover = "";

while (adicionar != "não") {
    adicionar = prompt("Você deseja adicionar ou remover itens à sua lista de compras?");
    if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
        adicionar = prompt("Você deseja adicionar ou remover itens à sua lista de compras?");
    } else {
        adicionar = prompt("Você deseja adicionar ou remover itens à sua lista de compras?");
    }

while (adicionar != "sim" && adicionar != "não" && adicionar != "remover") {
    alert("Operação não reconhecida");
    adicionar = prompt("Você deseja adicionar ou remover itens à sua lista de compras?");

}

    if (adicionar === "não") {
        break;
    }

if (adicionar === "sim"){ 
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

} else if (adicionar === "remover") {
    if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
        alert("A lista está vazia! ");
    } else {
        remover = prompt ("Lista de compras: \n Frutas: " + frutas + "\n Laticinios: " + laticinios + "\n Congelados: " + congelados + "\n Doces: " + doces + "\n\n Qual produto você deseja remover?")
        if (frutas.indexOf(remover) != -1) {
            frutas.splice(frutas.indexOf(remover), 1);
            alert("O item  " + remover + " foi removido com sucesso!");
        } else if (laticinios.indexOf(remover) != -1) {
            laticinios.splice(laticinios.indexOf(remover), 1);
            alert("O item  " + remover + " foi removido com sucesso!");
        } else if (congelados.indexOf(remover) != -1) {
            congelados.splice(congelados.indexOf(remover), 1);
            alert("O item  " + remover + " foi removido com sucesso!");
        }  else if (doces.indexOf(remover) != -1) {
            doces.splice(doces.indexOf(remover), 1);
            alert("O item  " + remover + " foi removido com sucesso!");
    } else {
        alert(" Não foi possível encontrar o item dentro da lista");
    }
}
}
}

mostra("Lista de compras: \n Frutas: " + frutas + "\n Laticinios: " + laticinios + "\n Congelados: " + congelados + "\n Doces: " + doces);