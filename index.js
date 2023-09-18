// import express from "express";
const express = require("express");

const app = express();

//200%!
app.use(express.json()); //Tudo que for recebido no formato JSON, vai ser processado no formato JS  

//Requisição: headers, body, params
//Resposta:

app.get("/", (req, res) => {
   console.log("Olá M4! Nós vamos aprender NodeJS com Express!");
   return res
      .status(200)
      .json({ message: "Olá M4! Nós vamos aprender NodeJS com Express!" });
});

app.post("/:userId", (req, res) => {
    //Salvar esse recurso num banco dados
    //Salvar imagem no servidor
    console.log("--PARAMS--");
    console.log(req.params);
    console.log("--BODY--");
    console.log(req.body);

    return res.status(200).json({ message: "Deu boa aqui campeão!"});
})

app.post("/", (req, res) => {
    console.log(req.body);
    return res.status(200).json({ message: `Olá, me chamo ${req.body.name}`})
})

app.listen(3000, () => {
   console.log("Conseguiu iniciar a dita cuja API com sucesso!");
});
