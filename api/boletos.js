const express = require("express");
const boletos = require('./boletosLista');
const pessoas = require('./pessoasLista');
const usuarios = require('./usuariosLista');

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    res.send(boletos.returnBoletos());
})

router.get("/:id", (req, res) => {
    const boleto = boletos.findBoleto(req.params.id);
    res.send(boleto);
})

router.get("/pessoa/:id", (req, res) => {
    const listaBoletosByPessoa = boletos.getBoletosPessoa(req.params.id);
    if (listaBoletosByPessoa.length > 0) {
        res.send(listaBoletosByPessoa);
    } else {
        res.status(400).send("Não há boletos registrados para essa pessoa!")
    }
})

router.post("/", (req, res) => {
    const boleto = req.body;

    if (boletos.verificarBoleto(boleto, pessoas.findPessoa(boleto.id_pessoa), usuarios.findUsuario(boleto.id_user))) {
        res.send(boletos.adicionarBoleto(boleto));
    } else {
        res.status(400).send("Não foi possível cadastrar um boleto!")
    }
})

router.put("/:id", (req, res) => {
    res.send(boletos.editarBoleto(req.params.id, req.body));
})

module.exports = {
    router
}
