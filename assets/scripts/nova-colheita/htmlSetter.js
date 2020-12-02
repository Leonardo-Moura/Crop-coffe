function setColheita(colheita) {
    document.getElementById('desc').value = colheita.desc;
    document.getElementById('areaplantada').value = colheita.areaplantada;
    document.getElementById('datainicio').value = getDateinFormatYYYYMMDD(colheita.datainicio);
    document.getElementById('datafim').value = getDateinFormatYYYYMMDD(colheita.datafim);
}