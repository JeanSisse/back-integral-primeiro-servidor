const express = require('express');

const app = express();

let nVez = 0;

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

app.get("/", (requisicao, resposta) => {
	resposta.send(`É a vez de ${jogadores[nVez]} jogar!`);
	nVez = nVez < jogadores.length - 1 ? (++nVez) : 0;
});

app.listen(8000);