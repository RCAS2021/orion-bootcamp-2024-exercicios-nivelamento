// Paradigma Imperativo
let lista = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

function bioByIdImperativo(id_passado: number): string{
    for (let i of lista){
        if (i.id === id_passado){
            return i.bio;
        }
    }

    return "ID não existe";
}

function nameByIdImperativo(id_passado: number): string{
    for (let i of lista){
        if (i.id === id_passado){
            return i.name;
        }
    }

    return "ID não existe";
}

function removeFromListByIdImperativo(id_passado: number): string{
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === id_passado){
            lista.splice(i, 1);
            return `Item removido: ${id_passado}`
        }
    }

    return "ID não existe";
}

function updateByIdImperativo(id_passado: number, name?: string, bio?: string) {
    for (let i of lista) {
        if (i.id === id_passado) {
            if (name !== undefined) {
                i.name = name;
            }
            if (bio !== undefined) {
                i.bio = bio;
            }
            return `Informações alteradas no ID ${id_passado}`;
        }
    }
    return "ID não existe";
}

console.log("*****PARADIGMA IMPERATIVO*****")
console.log("Lista inicial")
console.log(lista)
console.log("\nBusca da BIO por id: " + bioByIdImperativo(1));
console.log("Busca do nome por id: " + nameByIdImperativo(2));
console.log("\nRemovendo da lista pelo id");
console.log(removeFromListByIdImperativo(3));
console.log(lista)
console.log("\nAtualizando valor do name + bio, pelo id");
console.log(updateByIdImperativo(4, "testename1", "testebio1"));
console.log(lista)
console.log("\nAtualizando valor do name, pelo id");
console.log(updateByIdImperativo(4, "testename2", undefined));
console.log(lista)
console.log("\nAtualizando valor da bio, pelo id");
console.log(updateByIdImperativo(4, undefined, "testebio2"));
console.log(lista)

// Paradigma funcional 
lista = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

const bioByIdFuncional = (id_passado: number): string => {
    const i = lista.find((i) => i.id === id_passado)
    if (i !== undefined){
        return i.bio;
    }

    return "ID não existe";
}

const nameByIdFuncional = (id_passado: number): string => {
    const i = lista.find((i) => i.id === id_passado)
    if (i !== undefined){
        return i.name;
    }

    return "ID não existe";
}

const removeFromListByIdFuncional = (id_passado: number) => {
    return lista.filter((i) => i.id !== id_passado);
}

const updateByIdFuncional = (id_passado: number, name?: string, bio?: string) => {
    return lista.map((i) => {
        if (i.id === id_passado){
            return {
                ...i,
                name: name !== undefined ? name : i.name,
                bio: bio !== undefined ? bio : i.bio
            }
        }
        return i;
    })
}

console.log("*****PARADIGMA FUNCIONAL*****")
console.log("\nLista inicial")
console.log(lista)
console.log("Busca da BIO por id: " + bioByIdFuncional(1));
console.log("Busca do nome por id: " + nameByIdFuncional(2));
console.log("\nRemovendo da lista pelo id");
console.log(removeFromListByIdFuncional(3));
console.log("\nObserve que a lista original não foi alterada: ")
console.log(lista)
console.log("\nAtualizando valor do name + bio, pelo id");
console.log(updateByIdFuncional(4, "testename1", "testebio1"));
console.log("\nObserve que a lista original não foi alterada")
console.log(lista)
console.log("\nAtualizando valor do name, pelo id");
console.log(updateByIdFuncional(4, "testename2", undefined));
console.log("\nObserve que a lista original não foi alterada")
console.log(lista)
console.log("\nAtualizando valor da bio, pelo id");
console.log(updateByIdFuncional(4, undefined, "testebio2"));
console.log("\nObserve que a lista original não foi alterada")
console.log(lista)