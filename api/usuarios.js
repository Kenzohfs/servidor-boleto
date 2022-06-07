const express = require('express');
const router = express.Router();

router.use(express.json());

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

function returnUsuario() {
    return listaUsuarios;
}

function findUsuario(id) {
    const user = listaUsuarios.find(p => p.id == id);
    return user;
}

function adicionarUsuario(user) {
    if (verificacaoUser(user)) {
        user.id = listaUsuarios.length + 1;
        listaUsuarios.push(user);
        return user;
    } else {
        return "Usuário não foi criado!";
    }

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

function verificacaoUser(user) {
    if (user.nome && user.senha) {
        return true;
    } else {
        return false;
    }
}

router.get("/", (req, res) => {
    res.send(returnUsuario());
})

router.get("/:id", (req, res) => {
    const user = findUsuario(req.params.id);
    res.send(user);
})

router.post("/", (req, res) => {
    const usuario = adicionarUsuario(req.body);

    if (!typeof usuario == "string") {
        res.send(usuario)
    } else {
        res.status(400).send(usuario)
    }
})

router.put("/:id", (req, res) => {
    res.send(editarUsuario(req.params.id, req.body));
})

router.delete("/:id", (req, res) => {
    res.send(deletarUsuario(req.params.id));
})

module.exports = {
    router,
    returnUsuario,
    findUsuario,
    adicionarUsuario,
    editarUsuario,
    deletarUsuario
}