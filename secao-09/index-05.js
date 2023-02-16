function enviarEmail(corpo, para){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let deuError = true;
      if(!deuError){
        console.log("Email enviado");
        resolve() //PROMESSA OK
      } else{
        reject() //DEU ERRO
      }
    }, 2000);
  })
}

enviarEmail("ola mundo", "pablo@email")
.then(() => {
  console.log("OPA, VOCE CONSEGUIU FAZER OQ PROMETEU");
})
.catch(() => {
  console.log("QUE PENA, NÃO DEU")  
})