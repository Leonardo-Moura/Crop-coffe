const list = new Lista();
let idAtual = null;

function init() {
    list.addElement(getCompraTrator());
    list.addElement(getPagFuncionarios());
    list.addElement(getVendaCafe());
    updateList();
}

function addOrUpdate() {
    event.preventDefault();

    const movim = getMovim();
    if (isUpdate(idAtual, movim)) {
        list.update(idAtual, movim);
        idAtual = null;
    } else {
        list.addElement(movim);
    }

    document.getElementById('form').reset();
    updateList();
}

function update(id) {
    const movim = list.getElement(id);
    if (movim) {
        idAtual = movim.id;
        setMovim(movim);
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
			<td>${rowData.movim}</td>
			<td>${rowData.codigo}</td>
            <td>${rowData.descricao}</td>
            <td>${rowData.clifor}</td>
			<td>${rowData.dtvenc}</td>
			<td>${rowData.valor}</td>
			<td>${rowData.ctabanc}</td>
			<td>${rowData.situacao}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm" onclick="update(${rowData.id})">Editar</button>
            </td>
        </tr>
    `;
}
