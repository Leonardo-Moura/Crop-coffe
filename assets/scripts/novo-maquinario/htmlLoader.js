let desc;
let numManutencao;
let estado;
let valor;

function getNovoMaquinario() {
    clear();
    load();

    return createNovoMaquinario();
}

function clear() {
    desc = '';
    numManutencao = '0';
    estado = '';
    valor = '';
}

function load() {
    desc = document.getElementById('desc').value;
    numManutencao = document.getElementById('manutencao').value;
    estado = document.getElementById('estado').value;
    valor = document.getElementById('valor').value;
}

function createNovoMaquinario() {
    return {
        desc: desc,
        numManutencao: numManutencao,
        estado: estado,
        valor: valor
    }
}