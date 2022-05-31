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
    user.id = listaUsuarios.length + 1;
    listaUsuarios.push(user);
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

router.get("/", (req, res) => {
    res.send(returnUsuario());
})

router.get("/:id", (req, res) => {
    const user = findUsuario(req.params.id);
    res.send(user);
})

router.post("/", (req, res) => {
    const user = req.body;
    res.send(adicionarUsuario(user));
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