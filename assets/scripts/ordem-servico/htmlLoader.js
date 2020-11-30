let desc;
let funcionario;
let prioridade;

function getOrdemServico() {
    clear();
    load();

    return createOrdemServico();
}

function clear() {
    desc = '';
    funcionario = '';
    prioridade = '';
}

function load() {
    desc = document.getElementById('desc').value;
    funcionario = document.getElementById('funcionario').value;
    prioridade = document.getElementById('prioridade').value;
}

function createOrdemServico() {
    return {
        desc: desc,
        funcionario: funcionario,
        prioridade: prioridade
    }
}