const list = new Array();

function init() {
    addOrdemServico(getManutencaoColheitadeira());

    updateList()
}

function addOrdemServico(ordemServico) {
    let id = 1;
    if (list.length > 0) {
        id = list.map(o => o.id).reduce((o1, o2) => Math.max(o1, o2));
        id += 1;
    }

    ordemServico.id = id;
    list.push(ordemServico);
}

function add() {
    event.preventDefault();

    const ordemServico = getOrdemServico();
    addOrdemServico(ordemServico);

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
            <td>${rowData.funcionario}</td>
            <td>${rowData.prioridade}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm">Editar</button>
            </td>
        </tr>
    `;
}