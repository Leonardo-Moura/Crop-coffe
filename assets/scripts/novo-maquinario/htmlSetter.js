function setMaquinario(maquinario) {
    document.getElementById('desc').value = maquinario.desc;
    document.getElementById('manutencao').value = maquinario.numManutencao;
    document.getElementById('estado').value = maquinario.estado;
    document.getElementById('valor').value = maquinario.valor;
}