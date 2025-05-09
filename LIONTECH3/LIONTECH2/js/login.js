// js/login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  // Verificação simples (em produção, isso vem de um backend)
  if (login && senha) {
    localStorage.setItem('usuarioLogado', login);
    window.location.href = 'principal.html';
  } else {
    document.getElementById('mensagemLogin').textContent = 'Login ou senha inválidos.';
  }
});
