const list = new Lista();
let idAtual = null;

function init() {
    list.addElement(getCustosGerais());

    updateList()
}

function addOrUpdate() {
    event.preventDefault();

    const centroCusto = getCentroCusto();
    if (isUpdate(idAtual, list)) {
        list.update(idAtual, centroCusto);
        idAtual = null;
    } else {
        list.addElement(centroCusto);
    }

    document.getElementById('form').reset();
    updateList();
}

function update(id) {
    const centroCusto = list.getElement(id);
    if (centroCusto) {
        idAtual = centroCusto.id;
        setCentroCusto(centroCusto);
    }
}

function remove(id) {
    list.remove(id);
    updateList();
}

function updateList() {
    commomUpdateList(list, getRow);
}

function getRow(rowData) {
    return `
        <tr>
            <th scope="row">${rowData.id}</th>
            <td>${rowData.descricao}</td>
            <td>${rowData.origem}</td>
            <td>${rowData.destino}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm" onclick="update(${rowData.id})">Editar</button>
            </td>
        </tr>
    `;
}