const express = require('express');
const app = express();

// Rota para soma:
app.get("/soma", (req, res) => {
	const num1 = Number(req.query.num1);
	const num2 = Number(req.query.num2);

	console.log(`${num1} e ${num2}`);
	res.send(`${num1 + num2}`)
});

// Rota para subtrair:
app.get("/subtrair", (req, res) => {
	const num1 = Number(req.query.num1);
	const num2 = Number(req.query.num2);

	res.send(`${num1 - num2}`)
});

// Rota para multiplicar:
app.get("/multiplicar", (req, res) => {
	const num1 = Number(req.query.num1);
	const num2 = Number(req.query.num2);

	res.send(`${num1 * num2}`)
});

// Rota para dividir:
app.get("/dividir", (req, res) => {
	const num1 = Number(req.query.num1);
	const num2 = Number(req.query.num2);

	res.send(`${num1 / num2}`)
});

app.listen(8000);