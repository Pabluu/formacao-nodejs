const express = require('express');
const app = express();

// setando o motor de html é o EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    // res.send('Bem-vinda(o) ao meu site')
    res.render('index');
})

app.listen(8080, (error) => {
    if(error){
        console.log(`Erro ao levantar o servidor: ${error}`)
    } else{
        console.log("Servidor no ar!!!");
    }
});