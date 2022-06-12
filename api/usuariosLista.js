const listaUsuarios = [
    {
        id: 1,
        nome: "KenzoUser",
        senha: 111111
    },
    {
        id: 2,
        nome: "MariaUser",
        senha: 111111
    },
]

function findUsuario(id) {
    const user = listaUsuarios.find(p => p.id == id);
    return user;
}

function returnUsuario() {
    return listaUsuarios;
}

function adicionarUsuario(user) {
    user.id = listaPessoas.length + 1;
    listaPessoas.push(user);
    return user;
}

function editarUsuario(id, user) {
    const indice = listaUsuarios.findIndex(p => p.id == id);
    listaUsuarios[indice] = user;
    return user;
}

function deletarUsuario(id) {
    const index = listaUsuarios.findIndex(p => p.id == id);
    listaUsuarios.splice(index, 1);
    return listaUsuarios;
}

function verificarUser(user) {
    if (user.nome && user.senha) {
        return true;
    }
    return false;
}

function verificarDeletar(listaBoletos, idUser) {
    listaBoletos.forEach((boleto) => {
        if (boleto.id_user == idUser) {
            return false;
        }
    })
    return true;
}

module.exports = {
    listaUsuarios,
    findUsuario,
    returnUsuario,
    adicionarUsuario,
    editarUsuario,
    deletarUsuario,
    verificarUser,
    verificarDeletar
}