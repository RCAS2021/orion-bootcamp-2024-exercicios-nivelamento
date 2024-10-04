// @ts-check

function contarVogais(palavra?: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let cont = 0;

    if (!palavra) {
        const inputElement = document.getElementById("palavra") as HTMLInputElement;
        palavra = inputElement.value;
    }

    palavra = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    for (let i of palavra.toLowerCase()) {
        if (vogais.includes(i)) {
            cont += 1;
        }
    }

    const resultadoElement = document.getElementById("resultado") as HTMLElement;
    resultadoElement.textContent = "Quantidade de vogais: " + cont;
    return cont;
}
console.log("Quantidade de vogais (console): " + contarVogais("testaaando"));
