function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`
    Para: ${para}
    -----------------------------
    ${corpo}
    -----------------------------
    De: Pablo Henrique
    `)
    callback('OK', 10, '2s');
  }, 2000);
}

console.log("Inicio do Envio de e-mail");

enviarEmail("Oi, seja bem vindo ao Guia", "pablo@email.com", (status, amount, time) => {
  console.log(`
  Status: ${status}
  ---------------------
  Contato: ${amount}
  ---------------------
  Tempo de Envio: ${time}
  `)
});