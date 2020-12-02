function getCompraTrator() {
    return {
        movim: 'Saída',
        descricao: 'Equipamento para plantação',
        clifor: 'ABC Máquinas Agrícolas',
        ccusto: 'Plantação',
        formapag: 'Várias Formas de Pagamento',
        parcelas: '05',
        valor: '120.000,00',
        dtvenc: '10/10/2020',
        ctabanc: 'Bradesco',
		situacao: 'Pagamento Parcial'
    };
}

function getPagFuncionarios() {
    return {
        movim: 'Saída',
        descricao: 'Pagamento de funcionários',
        clifor: 'Funcionários',
        ccusto: 'Recursos Humanos',
        formapag: 'Transferência',
        parcelas: '01',
        valor: '30.000,00',
        dtvenc: '05/12/2020',
        ctabanc: 'Banco do Brasil',
		situacao: 'Aguardando Pagamento'
    };
}

function getVendaCafe() {
    return {
        movim: 'Entrada',
        descricao: 'Venda de café',
        clifor: 'Café ABC',
        ccusto: 'Comercial',
        formapag: 'Boleto',
        parcelas: '01',
        valor: '20.000,00',
        dtvenc: '02/01/2021',
        ctabanc: 'Itaú',
		situacao: 'Aguardando Pagamento'
    };
}
