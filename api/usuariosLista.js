const listaUsuarios = [
    {
        id: 1,
        nome: "KenzoUser",
        senha: 111111
    },
    {
        id: 2,
        nome: "HideakyUser",
        senha: 22222
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
    user.id = listaUsuarios.length + 1;
    listaUsuarios.push(user);
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
    let verificador = true;
    listaBoletos.forEach((boleto) => {
        if (boleto.id_user == idUser) {
            verificador = false;
        }
    })
    return verificador;
}

module.exports = {
    findUsuario,
    returnUsuario,
    adicionarUsuario,
    editarUsuario,
    deletarUsuario,
    verificarUser,
    verificarDeletar
}