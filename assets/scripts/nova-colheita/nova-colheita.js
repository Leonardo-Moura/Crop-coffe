const list = new Lista();
let idAtual = null;

function init() {
    list.addElement(getColheitaJaneiro());

    updateList()
}

function addOrUpdate() {
    event.preventDefault();

    const novaColheita = getNovaColheita();
    if (isUpdate(idAtual, list)) {
        list.update(idAtual, novaColheita);
        idAtual = null;
    } else {
        list.addElement(novaColheita);
    }

    document.getElementById('form').reset();
    updateList();
}
function update(id) {
    const colheita = list.getElement(id);
    if (colheita) {
        idAtual = colheita.id;
        setColheita(colheita);
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
            <td>${rowData.desc}</td>
            <td>${rowData.areaplantada}</td>
            <td>${rowData.datainicio}</td>
			<td>${rowData.datafim}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm" onclick="update(${rowData.id})">Editar</button>
            </td>
        </tr>
    `;
}