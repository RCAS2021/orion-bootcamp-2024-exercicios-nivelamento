function listarLista(){
    const listaHtml = document.getElementById("lista");
    if (listaHtml !== null){
        listaHtml.textContent = "Lista: " + JSON.stringify(lista);
    }
    else {
        console.log("Lista não existe")
    }
}

function buttonBioById(){
    const idPassado = document.getElementById("id") as HTMLInputElement;
    const id = idPassado.value;

    const resultadoElement = document.getElementById("resultadoLista") as HTMLElement;
    resultadoElement.textContent = "Bio do ID: " + bioByIdImperativo(Number(id));
}

function buttonNameById(){
    const idPassado = document.getElementById("id") as HTMLInputElement;
    const id = idPassado.value;

    const resultadoElement = document.getElementById("resultadoLista") as HTMLElement;
    resultadoElement.textContent = "Nome do ID: " + nameByIdImperativo(Number(id));
}
