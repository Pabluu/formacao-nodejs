function enviarEmail(corpo, para) {
  setTimeout(() => {
    console.log(`
    Para: ${para}
    -----------------------------
    ${corpo}
    -----------------------------
    De: Pablo Henrique`)
  }, 2000);
}

console.log('Inicio do Envio de e-mail')
enviarEmail('Oi, seja bem vindo ao Guia', 'pablo@email.com');
console.log('Seu e-mail foi enviado, deve chegar em minutos');
console.log('TUDO OK!!')
