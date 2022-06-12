const express = require('express');
const pessoas = require('./pessoasLista');
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    res.send(pessoas.returnPessoa());
})

router.get("/:id", (req, res) => {
    const pessoa = pessoas.findPessoa(req.params.id);
    res.send(pessoa);
})

router.post("/", (req, res) => {
    const pessoa = req.body;
    if (pessoas.verificarPessoa(pessoa)) {
        res.send(pessoas.adicionarPessoa(pessoa));
    } else {
        res.status(400).send("Pessoa não foi cadastrada!");
    }
})

router.put("/:id", (req, res) => {
    res.send(pessoas.editarPessoa(req.params.id, req.body));
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (pessoas.verificarDeletar(boletos.listaBoletos, id)) {
        res.send(pessoas.deletarPessoa(id));
    } else {
        res.status(400).send("Não é possível deletar este usuário pois há um boleto associado ao seu ID!");
    }
})

module.exports = {
    router
}