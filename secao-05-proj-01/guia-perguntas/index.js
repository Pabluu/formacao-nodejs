const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// DATABASE
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta')

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados');
    })
    .catch((erro) => {
        console.log(erro);
    })

// setando o motor do html, e que no caso é o EJS
app.set('view engine', 'ejs');
// arquivos estaticos
app.use(express.static('public'));

// traduzir o conteudo para que seja manipulável.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ROTAS
app.get('/', (req, res) => {
    Pergunta.findAll({
        raw: true,
        order: [['id', 'DESC']]
    })
        .then(perguntas => {
            res.render('index', { perguntas });
        })
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
})


app.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    Pergunta.create({
        titulo, descricao
    }).then(() => {
        res.redirect('/');
    })
})

app.get('/pergunta/:id', (req, res) => {
    let id = req.params.id;
    Pergunta.findOne({ where: { id: id } })
        .then(pergunta => {
            if (pergunta != undefined) { // pergunta encontrada

                Resposta.findAll(
                    { where: { perguntaId: pergunta.id },
                order: [['id', 'DESC']] }
                ).then(respostas => {
                    res.render('resposta', {
                        pergunta: pergunta,
                        respostas: respostas
                    });
                });
            } else { //não encontrada
                res.redirect('/');
            }
        });
})

app.post('/pergunta', (req, res) => {
    let corpo = req.body.corpo;
    let perguntaId = req.body.pergunta;

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect('/pergunta/' + perguntaId);
    })
});

app.listen(8080, (error) => {
    if (error) {
        console.log(`Erro ao levantar o servidor: ${error}`)
    } else {
        console.log("Servidor no ar!!!");
    }
});