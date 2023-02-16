function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 1500);
  });
}

function buscarEmailNoBanco(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("pablo@email");
    }, 2000);
  });
}

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let deuError = false;
      if (!deuError) {
        resolve({ time: 2, to: "pablo@email" }); //PROMESSA OK
      } else {
        reject("Fila Cheia"); //DEU ERRO
      }
    }, 2000);
  });
}

pegarId().then((id) => {
  buscarEmailNoBanco(id).then((email) => {
    enviarEmail("Ola, como vai?", email)
      .then(() => {
        console.log("Email enviado, para o usuário com id: " + id);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
