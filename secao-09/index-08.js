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

function pegarUsuarios(){
  return new Promise((resolve, reject) => {
    resolve([
      {name: 'Pablo', lang: 'Python'},
      {name: 'Henrique', lang: 'C#'}
    ])
  })
}


async function principal(){
  let usuarios = await pegarUsuarios();
  console.log(usuarios)
}

principal();

// let user = await pegarUsuarios()

/*
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
*/