function setMovim(movim) {
	document.getElementById('inputMovim').value = getComboValue('inputMovim', caixa.movim);
    document.getElementById('inputCodigo').value = caixa.codigo;
	document.getElementById('inputDesc').value = caixa.descricao;
    document.getElementById('inputClifor').value = caixa.clifor;   
    document.getElementById('inputCcusto').value = getComboValue('inputCcusto', caixa.ccusto);
	document.getElementById('inputFormapag').value = getComboValue('inputFormapag', caixa.formapag);
	document.getElementById('inputParcelas').value = getComboValue('inputParcelas', caixa.parcelas);
	document.getElementById('inputValor').value = caixa.valor;
    document.getElementById('inputDtvenc').value = caixa.dtvenc;
    document.getElementById('inputCtabanc').value = getComboValue('inputCtabanc', caixa.ctabanc);
    document.getElementById('inputSituacao').value = caixa.situacao;
	document.getElementById('inputVlpago').value = caixa.vlpago;
	document.getElementById('inputVlaberto').value = caixa.vlaberto;
	document.getElementById('inputVlmulta').value = caixa.vlmulta;
	document.getElementById('inputVlacresc').value = caixa.vlacresc;
	document.getElementById('inputDtpag').value = caixa.dtpag;
}
