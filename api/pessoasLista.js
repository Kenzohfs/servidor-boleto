const listaPessoas = [
    {
        id: 1,
        nome: "Kenzo",
        cpf: 111111
    },
    {
        id: 2,
        nome: "Hideaky",
        cpf: 22222
    },
]

function findPessoa(id) {
    const pessoa = listaPessoas.find(p => p.id == id);
    return pessoa;
}

function returnPessoa() {
    return listaPessoas;
}

function adicionarPessoa(pessoa) {
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    return pessoa;
}

function editarPessoa(id, pessoa) {
    const indice = listaPessoas.findIndex(p => p.id == id);
    listaPessoas[indice] = pessoa;
    return pessoa;
}

function deletarPessoa(id) {
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    return listaPessoas;
}

function verificarPessoa(pessoa) {
    if (pessoa.nome && pessoa.cpf) {
        return true;
    }
    return false;
}

function verificarDeletar(listaBoletos, idPessoa) {
    verificador = true;
    listaBoletos.forEach((boleto) => {
        if (boleto.id_pessoa == idPessoa) {
            verificador = false;
        }
    })
    return verificador;
}

module.exports = {
    findPessoa,
    returnPessoa,
    adicionarPessoa,
    editarPessoa,
    deletarPessoa,
    verificarPessoa,
    verificarDeletar
}