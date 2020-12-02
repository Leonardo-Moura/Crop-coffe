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

function getDateinFormatDDMMYYYY(date) {
    const value = new Date(date);
    return `${completarComZero(value.getDate())}/${completarComZero(value.getMonth() + 1)}/${value.getFullYear()}`;
}

function completarComZero(numero) {
    numero = '0' + String(numero);
    return numero.substring(numero.length - 2);
}

function getDateinFormatYYYYMMDD(date) {
    const values = date.split('/');
    return `${values[2]}-${values[1]}-${values[0]}`;
}
