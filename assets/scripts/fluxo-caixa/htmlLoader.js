let movim;
let codigo;
let descricao;
let clifor;
let ccusto;
let formapag;
let parcelas;
let valor;
let dtvenc;
let ctabanc;
let situacao

function getMovim() {
    clear();
    load();

    return createMovim();    
}

function clear() {
    movim = '';
	codigo = '';
    descricao = '';
    clifor = '';
    ccusto = '';
    formapag = '';
    parcelas = '';
    valor = '';
    dtvenc = '';
    ctabanc = '';
	situacao = '';
}

function load() {
    movim = getMovimFromHtml();
	codigo = document.getElementById('inputCodigo').value;
    descricao = document.getElementById('inputDesc').value;
    clifor = document.getElementById('inputClifor').value;
    ccusto = getCcustoFromHtml();
	formapag = getFormapagFromHtml();
	parcelas = getParcelasFromHtml();
    valor = document.getElementById('inputValor').value;
    dtvenc = document.getElementById('inputDtvenc').value;
	ctabanc = getCtabancFromHtml();
    situacao = document.getElementById('inputSituacao').value;
}

function getMovimsFromHtml() {
	const movimsElement = document.getElementById('inputMovim');
    return movimsElement[movimsElement.selectedIndex].text;
}

function getCcustoFromHtml() {
    const ccustosElement = document.getElementById('inputCcusto');
    return ccustosElement[ccustosElement.selectedIndex].text;
}

function getFormapagFromHtml() {
    const formapagsElement = document.getElementById('inputFormapag');
    return formapagsElement[formapagsElement.selectedIndex].text;
}

function getParcelasFromHtml() {
    const parcelassElement = document.getElementById('inputParcelas');
    return parcelassElement[parcelassElement.selectedIndex].text;
}

function getCtabancFromHtml() {
    const ctabancsElement = document.getElementById('inputCtabanc');
    return ctabancsElement[CtabancsElement.selectedIndex].text;

function createMovim() {
    const movim = {
        movim: movim,
		codigo: codigo,
        descricao: descricao,
        clifor: clifor,
        ccusto: ccusto,
        formapag: formapag,
        parcelas: parcelas,
        valor: valor,
        dtvenc: dtvenc,
        ctabanc: ctabanc,
		situacao: situacao
    };

    return movim;
}