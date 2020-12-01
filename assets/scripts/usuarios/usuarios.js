const list = new Lista();
let idAtual = null;

function init() {
    list.addElement(getJose());
    list.addElement(getAntonio());
    list.addElement(getLeonardo());

    updateList();
}

function addOrUpdate() {
    event.preventDefault();

    const user = getUser();
    if (isUpdate(idAtual, list)) {
        list.update(idAtual, user);
        idAtual = null;
    } else {
        list.addElement(user);
    }

    document.getElementById('form').reset();
    updateList();
}

function update(id) {
    const user = list.getElement(id);
    if (user) {
        idAtual = user.id;
        setUser(user);
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
            <td>${rowData.nome}</td>
            <td>${rowData.cargo}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm" onclick="update(${rowData.id})">Editar</button>
            </td>
        </tr>
    `;
}
