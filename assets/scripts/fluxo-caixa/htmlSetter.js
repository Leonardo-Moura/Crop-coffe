function setMovim(movim) {
	document.getElementById('inputMovim').value = getComboValue('inputPosition', caixa.movim)
    document.getElementById('inputCodigo').value = caixa.codigo;
	document.getElementById('inputDesc').value = caixa.descricao;
    document.getElementById('inputClifor').value = caixa.clifor;   
    document.getElementById('inputCcusto').value = getComboValue('inputPosition', caixa.ccusto)
	document.getElementById('inputFormapag').value = getComboValue('inputPosition', caixa.formapag)
	document.getElementById('inputParcelas').value = getComboValue('inputPosition', caixa.parcelas)
	document.getElementById('inputValor').value = caixa.valor;
    document.getElementById('inputDtvenc').value = caixa.dtvenc;
    document.getElementById('inputCtabanc').value = getComboValue('inputState', caixa.ctabanc);
    document.getElementById('inputSituacao').value = caixa.situacao;
	document.getElementById('inputVlpago').value = caixa.vlpago;
	document.getElementById('inputVlaberto').value = caixa.vlaberto;
	document.getElementById('inputVlmulta').value = caixa.vlmulta;
	document.getElementById('inputVlacresc').value = caixa.vlacresc;
	document.getElementById('inputDtpag').value = caixa.dtpag;
}
