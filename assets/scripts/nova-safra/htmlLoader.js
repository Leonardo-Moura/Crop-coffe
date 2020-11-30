let desc;
let areaplantada;
let inicio;

function getNovaSafra() {
    clear();
    load();

    return createNovaSafra();
}

function clear() {
    desc = '';
    areaplantada = '';
    inicio = '';
}

function load() {
    desc = document.getElementById('desc').value;
    areaplantada = document.getElementById('areaplantada').value;
    inicio = document.getElementById('inicio').value;
}

function createNovaSafra() {
    return {
        desc: desc,
        areaplantada: areaplantada,
        inicio: inicio
    }
}