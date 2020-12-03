function setMov(mov) {
	document.getElementById('inputMovim').value = getComboValue('inputMovim', mov.movim);
    document.getElementById('inputCodigo').value = mov.codigo;
	document.getElementById('inputDesc').value = mov.descricao;
    document.getElementById('inputClifor').value = mov.clifor;   
    document.getElementById('inputCcusto').value = getComboValue('inputCcusto', mov.ccusto);
	document.getElementById('inputFormapag').value = getComboValue('inputFormapag', mov.formapag);
	document.getElementById('inputParcelas').value = getComboValue('inputParcelas', mov.parcelas);
	document.getElementById('inputValor').value = mov.valor;
    document.getElementById('inputDtvenc').value = mov.dtvenc;
    document.getElementById('inputCtabanc').value = getComboValue('inputCtabanc', mov.ctabanc);
    document.getElementById('inputSituacao').value = mov.situacao;
	document.getElementById('inputVlpago').value = mov.vlpago;
	document.getElementById('inputVlaberto').value = mov.vlaberto;
	document.getElementById('inputVlmulta').value = mov.vlmulta;
	document.getElementById('inputVlacresc').value = mov.vlacresc;
	document.getElementById('inputDtpag').value = mov.dtpag;
}
