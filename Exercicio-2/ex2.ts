// Paradigma Imperativo
let lista = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

function bioPorIdImperativo(idPassado: number): string{
    /**
     * Retorna a bio do id fornecido como parâmetro, de acordo com o paradigma imperativo.
     * 
     * Checa cada item na lista, para encontrar o item com id igual ao id passado como parâmetro e retorna a bio. Se não encontrar, retorna uma mensagem de erro.
     * 
     * @param idPassado - ID na lista a ser fornecido
     * @returns A bio do id fornecido, caso seja encontrada, do contrário, retorna uma mensagem de erro.
     */
    for (let item of lista){
        if (item.id === idPassado){
            return item.bio;
        }
    }

    return "ID não existe";
}

function nomePorIdImperativo(idPassado: number): string{
    /**
     * Retorna o nome do id fornecido como parâmetro, de acordo com o paradigma imperativo.
     * 
     * Checa cada item na lista, para encontrar o item com id igual ao id passado como parâmetro e retorna o nome. Se não encontrar, retorna uma mensagem de erro.
     * 
     * @param idPassado - ID na lista a ser fornecido
     * @returns O nome do id fornecido, caso seja encontrado, do contrário, retorna uma mensagem de erro.
     */
    for (let item of lista){
        if (item.id === idPassado){
            return item.name;
        }
    }

    return "ID não existe";
}

function removeDaListaPorIdImperativo(idPassado: number): string{
    /**
     * Remove um item da lista, de acordo com o id fornecido, de acordo com o paradigma imperativo.
     * 
     * Checa cada item na lista, para encontrar o item com id igual ao id passado como parâmetro e o remove da lista. Se não encontrar, retorna uma mensagem de erro.
     * 
     * @param idPassado - ID na lista a ser fornecido
     * @returns Uma mensagem sinalizando o id que foi removido, caso esteja na lista, do contrário, retorna uma mensagem de erro.
     */
    for (let index = 0; index < lista.length; index++){
        if (lista[index].id === idPassado){
            lista.splice(index, 1);
            return `Item removido: ${idPassado}`
        }
    }

    return "ID não existe";
}

function atualizaPorIdImperativo(idPassado: number, nome?: string, bio?: string) {
    /**
     * Atualiza um item da lista, podendo ter como parâmetros, tanto o nome e a bio quando apenas um, alterando de acordo com quais foram fornecidos, de acordo com o paradigma imperativo.
     * 
     * Checa cada item na lista, para encontrar o item com id igual ao id passado como parâmetro e checa se foi passado como parâmetro um nome ou bio, se sim, atualiza o item da lista, de acordo com os parâmetros fornecidos.
     * Se não encontrar, retorna uma mensagem de erro.
     * 
     * @param idPassado - ID na lista a ser fornecido
     * @param nome - (Opcional) Nome a ser alterado
     * @param bio - (Opcional) Bio a ser alterada
     * @returns Uma mensagem sinalizando o id que foi alterado, caso esteja na lista, do contrário, retorna uma mensagem de erro.
     */
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

// Paradigma funcional 
interface listaFuncional {
    id: number;
    name: string;
    bio: string;
}

const listaFuncional: listaFuncional[] = [{id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];


const bioPorIdFuncional = (idPassado: number): string => {
    /**
     * Retorna a bio do id fornecido como parâmetro, de acordo com o paradigma funcional.
     * 
     * Utiliza o método find para percorrer a lista e encontrar o objeto que possua id igual ao id passado.
     * 
     * @param idPassado - ID na lista a ser fornecido
     * @returns A bio do id fornecido, caso seja encontrada, do contrário, retorna uma mensagem de erro.
     */
    const item = listaFuncional.find((item) => item.id === idPassado)
    if (item !== undefined){
        return item.bio;
    }

    return "ID não existe";
}

const nomePorIdFuncional = (idPassado: number): string => {
    /**
     * Retorna o nome do id fornecido como parâmetro, de acordo com o paradigma funcional.
     * 
     * Utiliza o método find para percorrer a lista e encontrar o objeto que possua id igual ao id passado.
     * 
     * @param idPassado - ID na lista a ser fornecido
     * @returns O nome do id fornecido, caso seja encontrada, do contrário, retorna uma mensagem de erro.
     */
    const item = listaFuncional.find((item) => item.id === idPassado)
    if (item !== undefined){
        return item.name;
    }

    return "ID não existe";
}

const removeDaListaPorIdFuncional = (idPassado: number): listaFuncional[] => {
    /**
     * Remove um item da lista, de acordo com o id fornecido, de acordo com o paradigma funcional.
     * 
     * Utiliza o método filter, para percorrer a lista e retornar uma lista sem o item com o id igual ao id passado.
     * 
     * @param idPassado - ID na lista a ser fornecido
     * @returns Uma lista de objetos que implementam a interface listaFuncional, contendo todos os itens da lista original, exceto o item com id igual ao id fornecido.
     */
    return listaFuncional.filter((item) => item.id !== idPassado);
}

const atualizaPorIdFuncional = (idPassado: number, nome?: string, bio?: string): listaFuncional[] => {
    /**
     * Atualiza um item da lista, podendo ter como parâmetros, tanto o nome e a bio quando apenas um, alterando de acordo com quais foram fornecidos, de acordo com o paradigma funcional.
     * 
     * Utiliza a função map para percorrer os itens da lista funcional, onde, caso o id do item seja o id passado, retorna um novo objeto com os campos name e bio atualizados com os valores fornecidos.
     * Se um dos valores não for fornecido, mantém o valor original do item.
     * Caso o id do item não seja igual ao id passado, retorna o item sem alterações.
     * 
     * @param idPassado - ID na lista a ser fornecido
     * @param nome - (Opcional) Nome a ser alterado
     * @param bio - (Opcional) Bio a ser alterada
     * @returns Uma nova lista de objetos que implementam a interface listaFuncional, com as informações atualizadas do item com id igual ao id passado.
     */
    return listaFuncional.map((item) => {
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