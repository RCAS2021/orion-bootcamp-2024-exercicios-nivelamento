"use strict";
function listarLista() {
    const listaHtml = document.getElementById("lista");
    if (listaHtml !== null) {
        listaHtml.textContent = "Lista: " + JSON.stringify(lista);
    }
    else {
        console.log("Lista não existe");
    }
}
function buttonListarLista() {
    const listaHtml = document.getElementById("resultadoListaFuncional");
    if (listaHtml !== null) {
        listaHtml.textContent = "Lista: " + JSON.stringify(lista);
    }
    else {
        console.log("Lista não existe");
    }
}
function getIdPassado(tipo) {
    let idPassado = null;
    let id = "";
    if (tipo === "imperativo") {
        idPassado = document.getElementById("id");
    }
    else if (tipo === "funcional") {
        idPassado = document.getElementById("idFuncional");
    }
    if (idPassado) {
        id = idPassado.value;
    }
    return Number(id);
}
function buttonBioByIdImperativo() {
    const id = getIdPassado("imperativo");
    const resultadoElement = document.getElementById("resultadoLista");
    resultadoElement.textContent = "Bio do ID: " + bioByIdImperativo(id);
}
function buttonNameByIdImperativo() {
    const id = getIdPassado("imperativo");
    const resultadoElement = document.getElementById("resultadoLista");
    resultadoElement.textContent = "Nome do ID: " + nameByIdImperativo(id);
}
function buttonUpdateByIdImperativo() {
    const id = getIdPassado("imperativo");
    const bioHtml = document.getElementById("bio");
    const nomeHtml = document.getElementById("name");
    const novaBio = bioHtml.value;
    const novoNome = nomeHtml.value;
    if (novaBio && !novoNome) {
        updateByIdImperativo(Number(id), undefined, novaBio);
    }
    else if (!novaBio && novoNome) {
        updateByIdImperativo(Number(id), novoNome, undefined);
    }
    else if (novoNome && novaBio) {
        updateByIdImperativo(Number(id), novoNome, novaBio);
    }
    listarLista();
}
function buttonRemoveByIdImperativo() {
    const id = getIdPassado("imperativo");
    removeFromListByIdImperativo(id);
    listarLista();
}
function buttonBioByIdFuncional() {
    const id = getIdPassado("funcional");
    const resultadoElement = document.getElementById("resultadoListaFuncional");
    resultadoElement.textContent = "Bio do ID: " + bioByIdFuncional(id);
}
function buttonNameByIdFuncional() {
    const id = getIdPassado("funcional");
    const resultadoElement = document.getElementById("resultadoListaFuncional");
    resultadoElement.textContent = "Nome do ID: " + nameByIdFuncional(id);
}
function buttonUpdateByIdFuncional() {
    const id = getIdPassado("funcional");
    const bioHtml = document.getElementById("bioFuncional");
    const nomeHtml = document.getElementById("nameFuncional");
    const novaBio = bioHtml.value;
    const novoNome = nomeHtml.value;
    let novaLista;
    const resultadoElement = document.getElementById("resultadoListaFuncional");
    if (novaBio || novoNome) {
        novaLista = updateByIdFuncional(Number(id), novoNome ? novoNome : undefined, novaBio ? novaBio : undefined);
        resultadoElement.textContent = "Nova lista: " + JSON.stringify(novaLista);
    }
    listarLista();
}
function buttonRemoveByIdFuncional() {
    const id = getIdPassado("funcional");
    const novaLista = removeFromListByIdFuncional(Number(id));
    const resultadoElement = document.getElementById("resultadoListaFuncional");
    resultadoElement.textContent = "Nova lista: " + JSON.stringify(novaLista) + "\nObserve que a lista original não foi alterada!";
    listarLista();
}
