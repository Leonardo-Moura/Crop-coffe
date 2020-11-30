const list = new Array();

function init() {
    addNovaSafra(getColheita2019());

    updateList()
}

function addNovaSafra(novaSafra) {
    let id = 1;
    if (list.length > 0) {
        id = list.map(n => n.id).reduce((n1, n2) => Math.max(n1, n2));
        id += 1;
    }

    novaSafra.id = id;
    list.push(novaSafra);
}

function add() {
    event.preventDefault();

    const novaSafra = getNovaSafra();
    addNovaSafra(novaSafra);

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
            <td>${rowData.areaplantada}</td>
            <td>${rowData.inicio}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm">Editar</button>
            </td>
        </tr>
    `;
}