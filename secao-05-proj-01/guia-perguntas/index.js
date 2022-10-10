const express = require('express');
const app = express();

// setando o motor de html é o EJS
app.set('view engine', 'ejs');

app.get('/:nome?', (req, res) => {
    // res.send('Besm-vinda(o) ao meu site')
    let nome = req.params['nome'] || 'Pablo Henrique';
    let exibirMsg = true;


    let produtos = [
        { nome: 'Doritos', preco: 3.14 },
        { nome: 'Leite', preco: 5.90 },
        { nome: 'Pão', preco: 0.5 },
    ]

    res.render('index',
        { nome, msg: exibirMsg, produtos: produtos });
})

app.listen(8080, (error) => {
    if (error) {
        console.log(`Erro ao levantar o servidor: ${error}`)
    } else {
        console.log("Servidor no ar!!!");
    }
});