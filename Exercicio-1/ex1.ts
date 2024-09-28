function contar_vogais(palavra: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let cont = 0;
    for (let i of palavra) {
        if (vogais.includes(i)) {
            cont += 1;
        }
    }
    return cont;
}

console.log("Quantidade de vogais: " + contar_vogais("testando"));