const botaoEntrar = document.getElementById('entrar');

function alertLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', alertLogin);
