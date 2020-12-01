function isUpdate(id, list) {
    return id !== null && list.getAllElements().map(x => x.id).includes(id);
}

function commomUpdateList(list, getRowMethod) {
    let listHtml = '';
    list.getAllElements().forEach(t => listHtml += getRowMethod(t));

    document.getElementById('table').innerHTML = listHtml;
}

function getComboValue(idElemento, texto) {
    const options = document.getElementById(idElemento).options;
    for (let index = 0; index < options.length; index++) {
        if (options[index].text === texto) {
            return options[index].value;
        }        
    }
}
