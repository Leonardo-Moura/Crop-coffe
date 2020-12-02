function getCompraTrator() {
    return {
        movim: 'Saída',
		codigo: '000001',
        descricao: 'Equipamento para plantação',
        clifor: 'ABC Máquinas Agrícolas',
        ccusto: 'Plantação',
        formapag: 'Várias Formas de Pagamento',
        parcelas: '05',
        valor: '120.000,00',
        dtvenc: '10/11/2020',
        ctabanc: 'Bradesco',
		situacao: 'Pagamento Parcial',
		vlpago: '60.000,00',
		vlaberto: '60.000,00',
		vlmulta: '0,00',
		vlacresc: '0,00',
		dtpag: '10/11/2020'
    };
}

function getPagFuncionarios() {
    return {
        movim: 'Saída',
		codigo: '000002',
        descricao: 'Pagamento de funcionários',
        clifor: 'Funcionários',
        ccusto: 'Recursos Humanos',
        formapag: 'Transferência',
        parcelas: '01',
        valor: '30.000,00',
        dtvenc: '05/12/2020',
        ctabanc: 'Banco do Brasil',
		situacao: 'Aguardando Pagamento',
		vlpago: '0,00',
		vlaberto: '30.000,00',
		vlmulta: '0,00',
		vlacresc: '0,00',
		dtpag: ''
    };
}

function getVendaCafe() {
    return {
        movim: 'Entrada',
		codigo: '000003',
        descricao: 'Venda de café',
        clifor: 'Café ABC',
        ccusto: 'Comercial',
        formapag: 'Boleto',
        parcelas: '01',
        valor: '20.000,00',
        dtvenc: '02/01/2021',
        ctabanc: 'Itaú',
		situacao: 'Pagamento Total',
		vlpago: '19.000,00',
		vlaberto: '0,00',
		vlmulta: '0,00',
		vlacresc: '1.000,00',
		dtpag: '02/12/2020'
    };
}
	
function getPagTerceiros() {
    return {
        movim: 'Saída',
        descricao: 'Pagamento de terceiros',
		codigo: '000004',
        clifor: 'Prestadores de Serviço',
        ccusto: 'Recursos Humanos',
        formapag: 'Pix',
        parcelas: '01',
        valor: '10.000,00',
        dtvenc: '06/12/2020',
        ctabanc: 'Banco do Brasil',
		situacao: 'Aguardando Pagamento',
		vlpago: '0,00',
		vlaberto: '10.000,00',
		vlmulta: '0,00',
		vlacresc: '0,00',
		dtpag: ''
    };
}

function getVendaCafe2() {
    return {
        movim: 'Entrada',
		codigo: '000005',
        descricao: 'Venda de café',
        clifor: 'XYZ Cafeteria',
        ccusto: 'Comercial',
        formapag: 'Dinheiro',
        parcelas: '01',
        valor: '1.000,00',
        dtvenc: '02/12/2020',
        ctabanc: 'Caixa Interno',
		situacao: 'Pagamento Total',
		vlpago: '950,00',
		vlaberto: '0,00',
		vlmulta: '0,00',
		vlacresc: '-50,00',
		dtpag: '02/12/2020'
    };
}
