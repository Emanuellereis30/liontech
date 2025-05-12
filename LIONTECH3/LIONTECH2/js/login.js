function validarLogin() {
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!usuario || !senha) {
    alert('Por favor, preencha todos os campos.');
    return false;
  }

  // Aqui você pode implementar a lógica de autenticação real
  alert('Login enviado!'); 
  return true;
}
