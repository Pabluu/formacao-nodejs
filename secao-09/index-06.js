function enviarEmail(corpo, para){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let deuError = true;
      if(!deuError){
        console.log("Email enviado");
        resolve({time: 2, to: "pablo@email"}) //PROMESSA OK
      } else{
        reject() //DEU ERRO
      }
    }, 2000);
  })
}

enviarEmail("ola mundo", "pablo@email")
.then(({time, to}) => {
  console.log(`
  Time: ${time}
  To: ${to}`);
})
.catch((error) => {
  console.log("QUE PENA, NÃO DEU")  
})