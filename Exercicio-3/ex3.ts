function listarLista(){
    /**
     * Atualiza o elemento HTML lista, com a lista de itens do exercício 2.
     * 
     * Verifica se o elemento HTML lista existe e o atualiza com a lista do exercício 2. Caso ele não existe, exibe uma mensagem de erro.
     * 
     * @returns Não tem retorno.
     */
    const listaHtml = document.getElementById("lista");
    if (listaHtml !== null){
        listaHtml.textContent = "Lista: " + JSON.stringify(lista);
    }
    else {
        console.log("Lista não existe")
    }
}

function pegaIdPassado(tipo: string){
    /**
     * Pega o id passado pelo elemento de input HTML e retorna o id.
     * 
     * Checa o parâmetro tipo, buscando por id, caso o tipo seja imperativo ou por idFuncional, caso o tipo seja funcional.
     * 
     * @param tipo - O tipo da função que está buscando o id.
     * 
     * @returns Retorna o id a partir do elemento input HTML, convertido para número.
     */
    let idPassado = null;
    let id = "";

    if (tipo === "imperativo"){
        idPassado = document.getElementById("id") as HTMLInputElement;
    }
    else if (tipo === "funcional"){
        idPassado = document.getElementById("idFuncional") as HTMLInputElement;
    }
    
    if (idPassado){
        id = idPassado.value;
    }

    return Number(id);
}

function botaoBioPorIdImperativo(){
    /**
     * Atualiza o texto de um elemento HTML de acordo com o id fornecido, com a bio do id.
     * 
     * A função chama a função pegaIdPassado, com o tipo imperativo, para obter o id do elemento input HTML e então busca a bio do id chamando a função bioPorIdImperativo com o parâmetro do id.
     * 
     * @returns Não retorna nenhum valor.
     */
    const id = pegaIdPassado("imperativo");

    const resultadoElement = document.getElementById("resultadoLista") as HTMLElement;
    resultadoElement.textContent = "Bio do ID: " + bioPorIdImperativo(id);
}

function botaoNomePorIdImperativo(){
    /**
     * Atualiza o texto de um elemento HTML de acordo com o id fornecido, com o nome do id.
     * 
     * A função chama a função pegaIdPassado, com o tipo imperativo, para obter o id do elemento input HTML e então busca a bio do id chamando a função nomePorIdImperativo com o parâmetro do id.
     * 
     * @returns Não retorna nenhum valor.
     */
    const id = pegaIdPassado("imperativo");

    const resultadoElement = document.getElementById("resultadoLista") as HTMLElement;
    resultadoElement.textContent = "Nome do ID: " + nomePorIdImperativo(id);
}

function botaoAtualizaPorIdImperativo(){
    /**
     * Atualiza a bio e/ou o nome de um item da lista com base no id obtido via a função pegaIdPassado, com o tipo imperativo como parâmetro e exibe a lista atualizada.
     * 
     * A função chama a função pegaIdPassado, com o tipo imperativo, para obter o id do elemento input HTML e então busca os valores a serem atualizados da bio e do nome através de 
     * elementos HTML correspondentes. Dependendo dos valores a serem atualizados, a função chama a função atualizarPorIdImperativo, com valores de parâmetros correspondentes.
     * Após a atualização, a função chama a função listarLista para exibir a lista atualizada de usuários.
     * 
     * @returns Não retorna nenhum valor.
     */
    const id = pegaIdPassado("imperativo");
    const bioHtml = document.getElementById("bio") as HTMLInputElement;
    const nomeHtml = document.getElementById("name") as HTMLInputElement;
    const novaBio = bioHtml.value;
    const novoNome = nomeHtml.value;

    if (novaBio && !novoNome){
        atualizaPorIdImperativo(Number(id), undefined, novaBio);
    }
    else if (!novaBio && novoNome){
        atualizaPorIdImperativo(Number(id), novoNome, undefined);
    }
    else if (novoNome && novaBio){
        atualizaPorIdImperativo(Number(id), novoNome, novaBio);
    }

    listarLista();
}

function botaoRemovePorIdImperativo(){
    /**
     * Remove um item da lista de acordo com o id passado.
     * 
     * A função chama a função pegaIdPassado, com o tipo imperativo, para obter o id do elemento input HTML e então chama a função removeDaListaPorIdImperativo,
     * removendo da lista o item com id igual ao id passado.
     * 
     * Após a remoção, a função chama a função listarLista para exibir a lista atualizada de usuários.
     * 
     * @returns Não retorna nenhum valor.
     */
    const id = pegaIdPassado("imperativo");

    removeDaListaPorIdImperativo(id);

    listarLista();
}

function botaoBioPorIdFuncional(){
    /**
     * Atualiza o texto de um elemento HTML de acordo com o id fornecido, com a bio do id.
     * 
     * A função chama a função pegaIdPassado, com o tipo funcional, para obter o id do elemento input HTML e então busca a bio do id chamando a função bioPorIdFuncional com o parâmetro do id.
     * 
     * @returns Não retorna nenhum valor.
     */
    const id = pegaIdPassado("funcional");

    const resultadoElement = document.getElementById("resultadoListaFuncional") as HTMLElement;
    resultadoElement.textContent = "Bio do ID: " + bioPorIdFuncional(id);
}

function botaoNomePorIdFuncional(){
    /**
     * Atualiza o texto de um elemento HTML de acordo com o id fornecido, com o nome do id.
     * 
     * A função chama a função pegaIdPassado, com o tipo funcional, para obter o id do elemento input HTML e então busca o nome do id chamando a função nomePorIdFuncional com o parâmetro do id.
     * 
     * @returns Não retorna nenhum valor.
     */
    const id = pegaIdPassado("funcional");

    const resultadoElement = document.getElementById("resultadoListaFuncional") as HTMLElement;
    resultadoElement.textContent = "Nome do ID: " + nomePorIdFuncional(id);
}

function botaoAtualizaPorIdFuncional(){
    /**
     * Atualiza a bio e/ou o nome de um item na lista com base no id obtido via a função pegaIdPassado, com o tipo funcional e exibe a lista atualizada.
     * 
     * A função obtém o id de um elemento input HTML e busca os valores a serem atualizados da bio e do nome através de elementos input HTML correspondentes.
     * Se pelo menos um dos valores existir, a função chama a função atualizaPorIdFuncional para realizar a atualização dos valores e retornar uma nova lista,
     * que será utilizada ao atualizar o texto do elemento HTML resultadoListaFuncional e chama a função listarLista para mostrar a lista original,
     * demonstrando que foi criada uma nova lista e a lista original permanece inalterada.
     * 
     * @returns Não retorna nenhum valor.
     */
    const id = pegaIdPassado("funcional");
    const bioHtml = document.getElementById("bioFuncional") as HTMLInputElement;
    const nomeHtml = document.getElementById("nameFuncional") as HTMLInputElement;
    const novaBio = bioHtml.value;
    const novoNome = nomeHtml.value;
    let novaLista;
    const resultadoElement = document.getElementById("resultadoListaFuncional") as HTMLElement;

    if (novaBio || novoNome){
        novaLista = atualizaPorIdFuncional(Number(id), novoNome ? novoNome : undefined , novaBio ? novaBio: undefined)
        resultadoElement.textContent = "Nova lista: " + JSON.stringify(novaLista);
    }

    listarLista();
}

function botaoRemovePorIdFuncional(){
    /**
     * Remove um item da lista com base no ID obtido via a função `pegaIdPassado`, com o tipo "funcional", e exibe a lista atualizada.
     * 
     * A função obtém o id de um elemento input HTML e chama a função removeDaListaPorIdFuncional, para remover o item correspondente. 
     * O resultado é uma nova lista, que será usada então, para atualizar o elemento HTML resultadoListaFuncional, e então chama a função listarLista para mostrar a lista original,
     * demonstrando que foi criada uma nova lista e a lista original permanece inalterada.
     * 
     * @returns Não retorna nenhum valor.
     */
    const id = pegaIdPassado("funcional");

    const novaLista = removeDaListaPorIdFuncional(Number(id));
    const resultadoElement = document.getElementById("resultadoListaFuncional") as HTMLElement;
    resultadoElement.textContent = "Nova lista: " + JSON.stringify(novaLista) + "\nObserve que a lista original não foi alterada!";
    
    listarLista();
}

