function setUser(user) {
    document.getElementById('inputEmail4').value = user.email;
    document.getElementById('inputPassword4').value = user.password;
    document.getElementById('inputName').value = user.nome;
    document.getElementById('inputAddress2').value = user.rua;
    document.getElementById('inputPosition').value = getComboValue('inputPosition', user.cargo)
    document.getElementById('inputCity').value = user.cidade;
    document.getElementById('inputState').value = getComboValue('inputState', user.uf);
    document.getElementById('inputZip').value = user.cep;
    document.getElementById('gridCheck').checked = user.ativo;
}
