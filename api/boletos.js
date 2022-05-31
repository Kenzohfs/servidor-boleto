const express = require("express");
const router = express.Router();

router.use(express.json());

const listaBoletos = [
    {
        id_boleto: 1,
        valor: 30,
        id_user: 1,
        id_pessoa: 2,
        status: 100,
        nome_pessoa: "Maria"
    }
]

function returnBoletos() {
    return listaBoletos;
}

function findBoleto(id) {
    const boleto = listaBoletos.find(b => b.id == id);
    return boleto;
}

router.get("/", (req, res) => {
    res.send(returnBoletos());
})

router.get("/:id", (req, res) => {
    const user = findBoleto(req.params.id);
    res.send(user);
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
