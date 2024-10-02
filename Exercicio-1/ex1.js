"use strict";
// @ts-check
function contarVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let cont = 0;
    if (!palavra) {
        const inputElement = document.getElementById("palavra");
        palavra = inputElement.value;
    }
    for (let i of palavra.toLowerCase()) {
        if (vogais.includes(i)) {
            cont += 1;
        }
    }
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "Quantidade de vogais: " + cont;
    return cont;
}
console.log("Quantidade de vogais (console): " + contarVogais("testaaando"));
