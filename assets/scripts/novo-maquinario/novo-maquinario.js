const list = new Lista();
let idAtual = null;

function init() {
    list.addElement(getCompraTrator());

    updateList()
}

function addOrUpdate() {
    event.preventDefault();

    const novoMaquinario = getNovoMaquinario();
    if(isUpdate(idAtual, list)) {
        list.update(idAtual, novoMaquinario);
        idAtual = null;
    } else {
        list.addElement(novoMaquinario);
    }

    document.getElementById('form').reset();
    updateList();
}

function update(id) {
    const maquinario = list.getElement(id);
    if (maquinario) {
        idAtual = maquinario.id;
        setMaquinario(maquinario);
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
            <td>${rowData.estado}</td>
            <td>${rowData.valor}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm" onclick="update(${rowData.id})">Editar</button>
            </td>
        </tr>
    `;
}