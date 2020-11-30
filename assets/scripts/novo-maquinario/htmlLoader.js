let desc;
let estado;
let valor;

function getNovoMaquinario() {
    clear();
    load();

    return createNovoMaquinario();
}

function clear() {
    desc = '';
    estado = '';
    valor = '';
}

function load() {
    desc = document.getElementById('desc').value;
    estado = document.getElementById('estado').value;
    valor = document.getElementById('valor').value;
}

function createNovoMaquinario() {
    return {
        desc: desc,
        estado: estado,
        valor: valor
    }
}