const express = require('express'); //importando o express

const app = express(); // startando o express


// rota 'home'
app.get('/', function(req, res){
    res.send('Bem-vindo ao guia do programador') 
    // irá dar um erro pois só pode enviar uma resposta por requisição
    // res.send('Bem-vindo ao guia do programador') // ERR_HTTP_HEADERS_SENT
});

// rota 'blog'
app.get('/blog', function(req, res){
    res.send('Bem-vindo ao meu blog');
})

// rota 'canal/youtube'
app.get('/canal/youtube', function(req, res){
    res.send('<h1>Bem-vindo ao meu canal</h1>');
})

// parametro OPCIONAL
app.get('/blog/:artigo?', function(req, res){
    res.send(`Bem-vindo ao artigo ${req.params['artigo']}`)
})

// parametro OBRIGATORIO
app.get('/ola/:nome', function(req, res){
    res.send(`Oiii, ${req.params.nome}`)
})

// servidor ouvindo na porta 4000
app.listen(4000, function(error){
    if(error){
        console.log('Ocorreu um erro');
    } else{
        console.log('Servidor rodando...')
    }
})