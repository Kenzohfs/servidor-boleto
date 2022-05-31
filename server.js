const express = require("express");
const app = express();
const port = 3000;

const pessoas = require("./api/pessoas");
const usuarios = require("./api/usuarios");

app.use(express.json());
app.use("/api/pessoas/", pessoas.router);
app.use("/api/usuarios/", usuarios.router);

app.listen(port, () => {
    console.log(`Escutando em localhost:${port}`);
})

//para retornar status do boleto:
//res.status(num).send("mensagem")
//num = codigo, 100, 200, 300, 400, 500;

/*
obj usuario = id nome

boleto: tem q ter valor e pessoa no boleto
*no post, precisa vir uma pessoa q deve ser pegue no export pel o get id do arquivo pessoas

pessoa
id nome cpf

usuario
id nome senha

boleto
id idpessoa valor idusuario status nomepessoa


get by pessoa
todos os boletos de uma pessoa (buscar pelo id no front)
*/