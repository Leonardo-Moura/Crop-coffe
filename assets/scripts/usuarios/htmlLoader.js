let email;
let password;
let nome;
let rua;
let cargo;
let cidade;
let uf;
let cep;
let ativo;

function getUser() {
    clear();
    load();

    return createUser();    
}

function clear() {
    email = '';
    password = '';
    nome = '';
    rua = '';
    cargo = '';
    cidade = '';
    uf = '';
    cep = '';
    ativo = null;
}

function load() {
    email = document.getElementById('inputEmail4').value;
    password = document.getElementById('inputPassword4').value;
    nome = document.getElementById('inputName').value;
    rua = document.getElementById('inputAddress2').value;
    cargo = getCargoFromHtml();
    cidade = document.getElementById('inputCity').value;
    uf = getUFFromHtml();
    cep = document.getElementById('inputZip').value;
    ativo = document.getElementById('gridCheck').checked;
}

function getCargoFromHtml() {
    const cargosElement = document.getElementById('inputPosition');
    return cargosElement[cargosElement.selectedIndex].text;
}

function getUFFromHtml() {
    const ufsElement = document.getElementById('inputState');
    return ufsElement[ufsElement.selectedIndex].text;
}

function createUser() {
    const user = {
        email: email,
        password: password,
        nome: nome,
        rua: rua,
        cargo: cargo,
        cidade: cidade,
        uf: uf,
        cep: cep,
        ativo: ativo
    };

    return user;
}