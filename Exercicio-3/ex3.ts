function listarLista(){
    const listaHtml = document.getElementById("lista");
    if (listaHtml !== null){
        listaHtml.textContent = "Lista: " + JSON.stringify(lista);
    }
    else {
        console.log("Lista não existe")
    }
}

function botaoListarLista(){
    const listaHtml = document.getElementById("resultadoListaFuncional");
    if (listaHtml !== null){
        listaHtml.textContent = "Lista: " + JSON.stringify(lista);
    }
    else {
        console.log("Lista não existe")
    }
}

function pegaIdPassado(tipo: string){
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
    const id = pegaIdPassado("imperativo");

    const resultadoElement = document.getElementById("resultadoLista") as HTMLElement;
    resultadoElement.textContent = "Bio do ID: " + bioPorIdImperativo(id);
}

function botaoNomePorIdImperativo(){
    const id = pegaIdPassado("imperativo");

    const resultadoElement = document.getElementById("resultadoLista") as HTMLElement;
    resultadoElement.textContent = "Nome do ID: " + nomePorIdImperativo(id);
}

function botaoAtualizaPorIdImperativo(){
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
    const id = pegaIdPassado("imperativo");

    removeDaListaPorIdImperativo(id);

    listarLista();
}

function botaoBioPorIdFuncional(){
    const id = pegaIdPassado("funcional");

    const resultadoElement = document.getElementById("resultadoListaFuncional") as HTMLElement;
    resultadoElement.textContent = "Bio do ID: " + bioPorIdFuncional(id);
}

function botaoNomePorIdFuncional(){
    const id = pegaIdPassado("funcional");

    const resultadoElement = document.getElementById("resultadoListaFuncional") as HTMLElement;
    resultadoElement.textContent = "Nome do ID: " + nomePorIdFuncional(id);
}

function botaoAtualizaPorIdFuncional(){
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
    const id = pegaIdPassado("funcional");

    const novaLista = removeDaListaPorIdFuncional(Number(id));
    const resultadoElement = document.getElementById("resultadoListaFuncional") as HTMLElement;
    resultadoElement.textContent = "Nova lista: " + JSON.stringify(novaLista) + "\nObserve que a lista original não foi alterada!";
    
    listarLista();
}

