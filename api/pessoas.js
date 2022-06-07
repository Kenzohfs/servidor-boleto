const express = require('express');
const router = express.Router();

router.use(express.json());

const listaPessoas = [
    {
        id: 1, 
        nome: "Kenzo",
        cpf: 111111
    },
    {
        id: 2, 
        nome: "Maria",
        cpf: 111111
    },
]

function returnPessoa() {
    return listaPessoas;
}

function findPessoa(id) {
    const pessoa = listaPessoas.find(p => p.id == id);
    return pessoa;
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
    } else {
        return false;
    }
}

router.get("/", (req, res) => {
    res.send(returnPessoa());
})

router.get("/:id", (req, res) => {
    const pessoa = findPessoa(req.params.id);
    res.send(pessoa);
})

router.post("/", (req, res) => {
    const pessoa = req.body;
    if (verificarPessoa(pessoa)) {
        res.send(adicionarPessoa(pessoa));
    } else {
        res.status(400).send("Pessoa não foi cadastrada!");
    }
})

router.put("/:id", (req, res) => {
    res.send(editarPessoa(req.params.id, req.body));
})

router.delete("/:id", (req, res) => {
    res.send(deletarPessoa(req.params.id));
})

module.exports = {
    router,
    returnPessoa,
    findPessoa,
    adicionarPessoa,
    editarPessoa,
    deletarPessoa
}