let descricao;
let origem;
let destino;

function getCentroCusto() {
    clear();
    load();

    return createCentroCusto();
}

function clear() {
    descricao = '';
    origem = '';
    destino = '';
}

function load() {
    descricao = document.getElementById('descricao').value;
    origem = document.getElementById('origem').value;
    destino = document.getElementById('destino').value;
}

function createCentroCusto() {
    return {
        descricao: descricao,
        origem: origem,
        destino: destino
    }
}