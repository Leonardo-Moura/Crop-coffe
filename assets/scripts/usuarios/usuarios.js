const list = new Array();

function init() {
    addUser(getJose());
    addUser(getAntonio());
    addUser(getLeonardo());
}

function addUser(user) {
    let id = 1;
    if (list.length > 0) {
        id = list.map(u => u.id).reduce(function (u1, u2) {return Math.max(u1, u2)});
        id += 1;
    }

    user.id = id;
    list.push(user);
}

function add() {
    event.preventDefault();

    const user = getUser();
    addUser(user);

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
            <td>${rowData.nome}</td>
            <td>${rowData.cargo}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm">Editar</button>
            </td>
        </tr>
    `;
}
