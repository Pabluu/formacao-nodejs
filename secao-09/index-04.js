function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    let deuErro = false;

    if(deuErro){
      callback(12, "O envio do email falhou");
    } else{
      callback(2);
    }
    
  }, 2000);
}

console.log("Inicio do Envio de e-mail");

enviarEmail(
  "Oi, seja bem vindo ao Guia",
  "pablo@email.com",
  (time, erro) => {

    if(erro == undefined){ //OK
      console.log('TUDO OK');
      console.log(`Tempo: ${time}`)
    } else{ //OPA, DEU ERRO
      console.log(`Ocorreu um erro: ${erro}`)
    }
  }
);
