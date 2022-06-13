const listaBoletos = [
    {
        id_boleto: 1,
        valor: 30,
        id_user: 1,
        id_pessoa: 2,
        status: "Aberto",
        nome_pessoa: "Hideaky"
    },
    {
        id_boleto: 2,
        valor: 30,
        id_user: 1,
        id_pessoa: 1,
        status: "Fechado",
        nome_pessoa: "Kenzo"
    },
    {
        id_boleto: 3,
        valor: 150,
        id_user: 2,
        id_pessoa: 1,
        status: "Aberto",
        nome_pessoa: "Kenzo"
    }
]

function returnBoletos() {
    return listaBoletos;
}

function findBoleto(id) {
    const boleto = listaBoletos.find(b => b.id_boleto == id);
    return boleto;
}

function adicionarBoleto(boleto) {
    boleto.id_boleto = listaBoletos.length + 1;
    listaBoletos.push(boleto);
    return boleto
}

function editarBoleto(id, boleto) {
    const indice = listaBoletos.findIndex(b => b.id_boleto == id);
    listaBoletos[indice] = boleto;
    return boleto;
}

function verificarBoleto(boleto, pessoa, usuario) {
    if (pessoa && usuario && boleto.valor > 0) {
        boleto.nome_pessoa = pessoa.nome;
        boleto.status = "Aberto";
        return true;
    }
    return false;
}

function getBoletosPessoa(id) {
    const listaBoletosByPessoa = [];
    listaBoletos.forEach((boleto) => {
        if (boleto.id_pessoa == id) {
            listaBoletosByPessoa.push(boleto);
        }
    })
    return listaBoletosByPessoa;
}

module.exports = {
    returnBoletos,
    findBoleto,
    adicionarBoleto,
    editarBoleto,
    verificarBoleto,
    getBoletosPessoa
}