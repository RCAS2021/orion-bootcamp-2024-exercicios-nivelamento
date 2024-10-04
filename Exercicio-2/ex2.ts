// Paradigma Imperativo
let lista = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

function bioPorIdImperativo(idPassado: number): string{
    for (let item of lista){
        if (item.id === idPassado){
            return item.bio;
        }
    }

    return "ID não existe";
}

function nomePorIdImperativo(idPassado: number): string{
    for (let item of lista){
        if (item.id === idPassado){
            return item.name;
        }
    }

    return "ID não existe";
}

function removeDaListaPorIdImperativo(idPassado: number): string{
    for (let index = 0; index < lista.length; index++){
        if (lista[index].id === idPassado){
            lista.splice(index, 1);
            return `Item removido: ${idPassado}`
        }
    }

    return "ID não existe";
}

function atualizaPorIdImperativo(idPassado: number, nome?: string, bio?: string) {
    for (let item of lista) {
        if (item.id === idPassado) {
            if (nome !== undefined) {
                item.name = nome;
            }
            if (bio !== undefined) {
                item.bio = bio;
            }
            return `Informações alteradas no ID ${idPassado}`;
        }
    }
    return "ID não existe";
}

console.log("*****PARADIGMA IMPERATIVO*****")
console.log("Lista inicial")
console.log(lista)
console.log("\nBusca da BIO por id: " + bioPorIdImperativo(1));
console.log("Busca do nome por id: " + nomePorIdImperativo(2));
console.log("\nRemovendo da lista pelo id");
console.log(removeDaListaPorIdImperativo(3));
console.log(lista)
console.log("\nAtualizando valor do name + bio, pelo id");
console.log(atualizaPorIdImperativo(4, "testename1", "testebio1"));
console.log(lista)
console.log("\nAtualizando valor do name, pelo id");
console.log(atualizaPorIdImperativo(4, "testename2", undefined));
console.log(lista)
console.log("\nAtualizando valor da bio, pelo id");
console.log(atualizaPorIdImperativo(4, undefined, "testebio2"));
console.log(lista)

// Paradigma funcional 
lista = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

const bioPorIdFuncional = (idPassado: number): string => {
    const item = lista.find((item) => item.id === idPassado)
    if (item !== undefined){
        return item.bio;
    }

    return "ID não existe";
}

const nomePorIdFuncional = (idPassado: number): string => {
    const item = lista.find((item) => item.id === idPassado)
    if (item !== undefined){
        return item.name;
    }

    return "ID não existe";
}

const removeDaListaPorIdFuncional = (idPassado: number) => {
    return lista.filter((item) => item.id !== idPassado);
}

const atualizaPorIdFuncional = (idPassado: number, nome?: string, bio?: string) => {
    return lista.map((item) => {
        if (item.id === idPassado){
            return {
                ...item,
                name: nome !== undefined ? nome : item.name,
                bio: bio !== undefined ? bio : item.bio
            }
        }
        return item;
    })
}

console.log("*****PARADIGMA FUNCIONAL*****")
console.log("\nLista inicial")
console.log(lista)
console.log("Busca da BIO por id: " + bioPorIdFuncional(1));
console.log("Busca do nome por id: " + nomePorIdFuncional(2));
console.log("\nRemovendo da lista pelo id");
console.log(removeDaListaPorIdFuncional(3));
console.log("\nObserve que a lista original não foi alterada: ")
console.log(lista)
console.log("\nAtualizando valor do name + bio, pelo id");
console.log(atualizaPorIdFuncional(4, "testename1", "testebio1"));
console.log("\nObserve que a lista original não foi alterada")
console.log(lista)
console.log("\nAtualizando valor do name, pelo id");
console.log(atualizaPorIdFuncional(4, "testename2", undefined));
console.log("\nObserve que a lista original não foi alterada")
console.log(lista)
console.log("\nAtualizando valor da bio, pelo id");
console.log(atualizaPorIdFuncional(4, undefined, "testebio2"));
console.log("\nObserve que a lista original não foi alterada")
console.log(lista)