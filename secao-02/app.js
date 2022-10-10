let http = require('http'); //modulo http já vem por padrão no node

http.createServer(function(requisicao, resposta){
    resposta.end("BEM VINDO AO SITE!!!")
}).listen(8181);
console.log("Meu servidor está rodando...")