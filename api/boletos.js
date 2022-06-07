const express = require("express");
const pessoas = require("../api/pessoas");
const router = express.Router();

router.use(express.json());

router.use("/api/pessoas/", pessoas.router);

const listaBoletos = [
    {
        id_boleto: 1,
        valor: 30,
        id_user: 1,
        id_pessoa: 2,
        status: 100,
        nome_pessoa: "Maria"
    },
    {
        id_boleto: 2,
        valor: 30,
        id_user: 1,
        id_pessoa: 2,
        status: 100,
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

function verificarBoleto(boleto) {
    if (boleto.id_pessoa && boleto.valor && boleto.id_user && boleto.status && boleto.nome_pessoa) {
        const pessoa = pessoas.findPessoa(boleto.id_pessoa);
        console.log(pessoa);
    } else {
        return false;
    }
}

router.get("/", (req, res) => {
    res.send(returnBoletos());
})

router.get("/:id", (req, res) => {
    const boleto = findBoleto(req.params.id);
    res.send(boleto);
})

router.get("/pessoa/:id", (req, res) => {
})

router.post("/", (req, res) => {
    const boleto = req.body;
    if (verificarBoleto(boleto)) {
        res.send(adicionarBoleto(boleto));
    } else {
        res.status(400).send("Não foi possível cadastrar um boleto!")
    }
})

router.put("/:id", (req, res) => {
    res.send(editarBoleto(req.params.id, req.body));
})

module.exports = {
    router,
    returnBoletos,
    findBoleto,
    editarBoleto
}
