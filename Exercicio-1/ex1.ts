// @ts-check

/**
 * Retorna a quantidade de vogais, dada uma palavra através de input de formulário HTML ou chamada de função.
 * 
 * Se a palavra for passada como parâmetro na chamada da função, a contagem será feita a partir do parâmetro,
 * se não, obtém o valor do campo input do formulário HTML, caso ambos estejam vazios, exibe uma mensagem de erro.
 * 
 * @param palavra - (Opcional) Palavra que terá suas vogais contadas, se não for fornecida durante a chamada de função, tentará capturar através do input do formulário HTML.
 * @returns A quantidade de vogais na palavra do parâmetro palavra. Retorna -1 se não houver uma palavra fornecida e exibe uma mensagem de erro.
 */
function contarVogais(palavra?: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let cont = 0;
    
    const resultadoElement = document.getElementById("resultado") as HTMLElement;
    const inputElement = document.getElementById("palavra") as HTMLInputElement;

    const mensagemErro = "Não foi fornecida nenhuma palavra";

    if (!palavra) {
        if (inputElement && inputElement.value){
            palavra = inputElement.value;
        }
        else {
            console.log(mensagemErro);
            resultadoElement.textContent = mensagemErro;
            return -1;
        }
    }

    palavra = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    for (let caractere of palavra.toLowerCase()) {
        if (vogais.includes(caractere)) {
            cont += 1;
        }
    }

    const quantidadeVogaisString = "Quantidade de vogais: "
    if (cont < 1){
        console.log("Não há vogais na palavra.");
        resultadoElement.textContent = quantidadeVogaisString + cont + ", não há vogais na palavra.";
        inputElement.value = palavra;
    }
    else {
        resultadoElement.textContent = quantidadeVogaisString + cont;
        inputElement.value = palavra;
    }

    return cont;
}
