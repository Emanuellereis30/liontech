// js/script.js

document.getElementById('formCadastro')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const login = document.getElementById('login').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmaSenha = document.getElementById('confirmaSenha').value.trim();
  const mensagem = document.getElementById('mensagemFeedback');

  if (login.length < 6) {
    mensagem.textContent = 'Login deve conter no mínimo 6 caracteres.';
    mensagem.style.color = 'red';
    return;
  }

  if (senha.length < 8) {
    mensagem.textContent = 'Senha deve conter no mínimo 8 caracteres.';
    mensagem.style.color = 'red';
    return;
  }

  if (senha !== confirmaSenha) {
    mensagem.textContent = 'As senhas não coincidem.';
    mensagem.style.color = 'red';
    return;
  }

  mensagem.textContent = 'Cadastro realizado com sucesso!';
  mensagem.style.color = 'green';

  // Redireciona para login após 2 segundos
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2000);
});
