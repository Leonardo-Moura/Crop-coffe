let desc;
let areaplantada;
let datainicio;
let datafim;

function getNovaColheita() {
    clear();
    load();

    return createNovaColheita();
}

function clear() {
    desc = '';
    areaplantada = '';
    datainicio = '';
	datafim = '';
}

function load() {
    desc = document.getElementById('desc').value;
    areaplantada = document.getElementById('areaplantada').value;
    datainicio = getDateinFormatDDMMYYYY(document.getElementById('datainicio').value);
	datafim = getDateinFormatDDMMYYYY(document.getElementById('datafim').value);

}

function createNovaColheita() {
    return {
        desc: desc,
        areaplantada: areaplantada,
        datainicio: datainicio,
		datafim: datafim
    }
}