const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => { //! target é o nosso input.value
    if (target.value.length > 3) {
      button.removeAttribute('disabled');
      return;
    }
  
    button.setAttribute('disabled', '');
  }
  
  const handleSubmit = (event) => {
    event.preventDefault(); //! faz com que a página não recarregue ao enviar o formulário
  
    localStorage.setItem('player', input.value); //! salva as informações do nome do browser/navegador 
    //? setItem espera dois parametros, o primeiro é a chave e a segunda é o que vai ser o valor que sera armazenado 
    window.location = 'pages/game.html'; //! Manda você para a outra página 
  }
  
  input.addEventListener('input', validateInput);
  form.addEventListener('submit', handleSubmit);
  
  