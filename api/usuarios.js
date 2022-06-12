const express = require('express');
const usuarios = require('./usuariosLista');
const boletos = require('./boletosLista');

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    res.send(usuarios.returnUsuario());
})

router.get("/:id", (req, res) => {
    const user = usuarios.findUsuario(req.params.id);
    res.send(user);
})

router.post("/", (req, res) => {
    const usuario = req.body;
    if (usuarios.verificarUsuario(usuario)) {
        res.send(usuarios.adicionarUsuario(usuario));
    } else {
        res.status(400).send("Usuario não foi cadastrada!");
    }
})

router.put("/:id", (req, res) => {
    res.send(usuarios.editarUsuario(req.params.id, req.body));
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (usuarios.verificarDeletar(boletos.listaBoletos, id)) {
        res.send(usuarios.deletarUsuario(id));
    } else {
        res.status(400).send("Não é possível deletar este usuário pois há um boleto associado ao seu ID!");
    }
})

module.exports = {
    router
}

