document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bv966968@gmail.com",
        Password : "7A2ABFCE722DE65D97C0023E9723278DD1C2",
        To : 'bv966968@gmail.com',
        From : document.getElementById('bv966968@gmail.com').value,
        Subject : "Este é o assunto",
        Body : "Nome: " + document.getElementById('nome').value + "<br>" +
               "E-mail: " + document.getElementById('email').value + "<br>" +
               "Instagram: " + document.getElementById('instagram').value + "<br>" +
               "Telefone: " + document.getElementById('telefone').value + "<br>" +
               "Renda Mensal: " + document.querySelector('input[name="renda"]:checked').value
    }).then(
        message => alert(message)
    );
});