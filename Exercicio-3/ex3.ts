function listarLista(){
    const listaHtml = document.getElementById("lista");
    if (listaHtml !== null){
        listaHtml.textContent = "Lista: " + JSON.stringify(lista);
    }
    else {
        console.log("Lista não existe")
    }
}

function getIdPassado(){
    const idPassado = document.getElementById("id") as HTMLInputElement;
    const id = idPassado.value;

    return id;
}

function buttonBioById(){
    const id = getIdPassado();

    const resultadoElement = document.getElementById("resultadoLista") as HTMLElement;
    resultadoElement.textContent = "Bio do ID: " + bioByIdImperativo(Number(id));
}

function buttonNameById(){
    const id = getIdPassado();

    const resultadoElement = document.getElementById("resultadoLista") as HTMLElement;
    resultadoElement.textContent = "Nome do ID: " + nameByIdImperativo(Number(id));
}

function buttonUpdateById(){
    const id = getIdPassado();
    const bioHtml = document.getElementById("bio") as HTMLInputElement;
    const nomeHtml = document.getElementById("name") as HTMLInputElement;
    const novaBio = bioHtml.value;
    const novoNome = nomeHtml.value;

    if (novaBio && !novoNome){
        updateByIdImperativo(Number(id), undefined, novaBio);
    }
    else if (!novaBio && novoNome){
        updateByIdImperativo(Number(id), novoNome, undefined);
    }
    else if (novoNome && novaBio){
        updateByIdImperativo(Number(id), novoNome, novaBio);
    }

    listarLista();
}