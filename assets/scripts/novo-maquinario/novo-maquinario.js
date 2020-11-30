const list = new Array();

function init() {
    addNovoMaquinario(getCompraTrator());

    updateList()
}

function addNovoMaquinario(novoMaquinario) {
    let id = 1;
    if (list.length > 0) {
        id = list.map(n => n.id).reduce((n1, n2) => Math.max(n1, n2));
        id += 1;
    }

    novoMaquinario.id = id;
    list.push(novoMaquinario);
}

function add() {
    event.preventDefault();

    const novoMaquinario = getNovoMaquinario();
    addNovoMaquinario(novoMaquinario);

    document.getElementById('form').reset();
    updateList();
}

function remove(id) {
    list.splice(id - 1, 1);
    updateList();
}

function updateList() {
    let listHtml = '';
    list.forEach(t => listHtml += getRow(t));

    document.getElementById('table').innerHTML = listHtml;
}

function getRow(rowData) {
    return `
        <tr>
            <th scope="row">${rowData.id}</th>
            <td>${rowData.desc}</td>
            <td>${rowData.estado}</td>
            <td>${rowData.valor}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm">Editar</button>
            </td>
        </tr>
    `;
}