const express = require('express'); //importando o express

const app = express(); // startando o express


// criado uma rota
app.get('/', function(req, res){
    res.send('Bem-vindo ao guia do programador') 
    // irá dar um erro pois só pode enviar uma resposta por requisição
    // res.send('Bem-vindo ao guia do programador') // ERR_HTTP_HEADERS_SENT
});

app.get('/blog', function(req, res){
    res.send('Bem-vindo ao meu blog');
})

app.get('/canal/youtube', function(req, res){
    res.send('<h1>Bem-vindo ao meu canal</h1>');
})

// servidor ouvindo na porta 4000
app.listen(4000, function(error){
    if(error){
        console.log('Ocorreu um erro');
    } else{
        console.log('Servidor rodando...')
    }
})