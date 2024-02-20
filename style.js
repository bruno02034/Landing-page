// Vincula a função de rolagem suave a todos os botões com a classe "header-button"
document.querySelectorAll('.header-button').forEach(button => {
    button.addEventListener('click', function() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  });
  
  // Vincula a função de rolagem suave a todos os botões com a classe "button-contact"
  document.querySelectorAll('.button-contact').forEach(button => {
    button.addEventListener('click', function() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  });
  
  // Vincula a função de rolagem suave ao botão na seção "quemsomos"
  document.getElementById('scrollButton3').addEventListener('click', function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });