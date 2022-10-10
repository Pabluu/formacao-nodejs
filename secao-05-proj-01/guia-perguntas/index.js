const express = require('express');
const app = express();

// setando o motor de html é o EJS
app.set('view engine', 'ejs');

app.get('/:nome?', (req, res) =>{
    // res.send('Besm-vinda(o) ao meu site')
    let nome = req.params['nome'] || 'Pablo Henrique';
    res.render('index', {nome});
})

app.listen(8080, (error) => {
    if(error){
        console.log(`Erro ao levantar o servidor: ${error}`)
    } else{
        console.log("Servidor no ar!!!");
    }
});