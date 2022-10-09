const express = require('express'); //importando o express

const app = express(); // startando o express

app.listen(4000, function(error){
    if(error){
        console.log('Ocorreu um erro');
    } else{
        console.log('Servidor rodando...')
    }
})