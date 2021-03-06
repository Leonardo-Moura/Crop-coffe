const list = new Lista();
let idAtual = null;

function init() {
    list.addElement(getCompraTrator());
    list.addElement(getPagFuncionarios());
    list.addElement(getVendaCafe());
	list.addElement(getPagTerceiros());
	list.addElement(getVendaCafe2());
    updateList();
}

function addOrUpdate() {
    event.preventDefault();

    const movim = getMovim();
    if(isUpdate(idAtual, list)) {
        list.update(idAtual, movim);
        idAtual = null;
    } else {
        list.addElement(movim);
    }

    document.getElementById('form').reset();
    updateList();
}

function update(id) {
    const mov = list.getElement(id);
    if (mov) {
        idAtual = mov.id;
        setMov(mov);
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
			<td>${rowData.vlaberto}</td>
			<td>${rowData.vlpago}</td>
			<td>${rowData.ctabanc}</td>
			<td>${rowData.situacao}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="remove(${rowData.id})">Remover</button>
                <button class="btn btn-info btn-sm" onclick="update(${rowData.id})">Alterar</button>
            </td>
        </tr>
    `;
}
