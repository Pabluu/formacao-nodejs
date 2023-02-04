function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`
    Para: ${para}
    -----------------------------
    ${corpo}
    -----------------------------
    De: Pablo Henrique
    `)
    callback();
  }, 2000);
}

console.log("Inicio do Envio de e-mail");

enviarEmail("Oi, seja bem vindo ao Guia", "pablo@email.com", (status, amount, time) => {
  console.log("Seu e-mail foi enviado, deve chegar em minutos");
  console.log("TUDO OK!!");
});
