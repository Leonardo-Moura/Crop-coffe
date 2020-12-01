const list = new Lista();
let idAtual = null;

function init() {
    list.addElement(getManutencaoColheitadeira());

    updateList();
}

function addOrUpdate() {
    event.preventDefault();

    const ordem = getOrdemServico();
    if (isUpdate(idAtual, list)) {
        list.update(idAtual, ordem);
        idAtual = null;
    } else {
        list.addElement(ordem);
    }

    document.getElementById('form').reset();
    updateList();
}

function update(id) {
    const ordem = list.getElement(id)
    if (ordem) {
        idAtual = ordem.id;
        setOrdemServico(ordem);
    }
}

function remove(id) {
    list.remove(id)
    updateList();
}

function updateList() {
    commomUpdateList(list, getRow);
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
                <button class="btn btn-info btn-sm" onclick="update(${rowData.id})">Editar</button>
            </td>
        </tr>
    `;
}