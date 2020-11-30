const list = new Array();

function init() {
    addCentroCusto(getCustosGerais());

    updateList()
}

function addCentroCusto(centroCusto) {
    let id = 1;
    if (list.length > 0) {
        id = list.map(c => c.id).reduce((c1, c2) => Math.max(c1, c2));
        id += 1;
    }

    centroCusto.id = id;
    list.push(centroCusto);
}

function add() {
    event.preventDefault();

    const centroCusto = getCentroCusto();
    addCentroCusto(centroCusto);

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
            <td>${rowData.descricao}</td>
            <td>${rowData.origem}</td>
            <td>${rowData.destino}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm">Editar</button>
            </td>
        </tr>
    `;
}