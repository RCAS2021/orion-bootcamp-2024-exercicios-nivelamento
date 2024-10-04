// @ts-check

function contarVogais(palavra?: string): number {


    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let cont = 0;
    
    const resultadoElement = document.getElementById("resultado") as HTMLElement;

    if (!palavra) {
        const inputElement = document.getElementById("palavra") as HTMLInputElement;
        if (inputElement && inputElement.value){
            palavra = inputElement.value;
        }
        else {
            console.log("Não foi fornecida nenhuma palavra.");
            resultadoElement.textContent = "Não foi fornecida nenhuma palavra.";
            return -1;
        }
    }

    palavra = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    for (let caractere of palavra.toLowerCase()) {
        if (vogais.includes(caractere)) {
            cont += 1;
        }
    }

    if (cont < 1){
        console.log("Não há vogais na palavra.")
        resultadoElement.textContent = "Quantidade de vogais: " + cont + ", não há vogais na palavra.";
    }
    else {
        resultadoElement.textContent = "Quantidade de vogais: " + cont;
    }

    return cont;
}
