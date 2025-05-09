
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (nome.length < 15 || nome.length > 60) {
        exibirMensagem('Nome deve ter entre 15 e 60 caracteres.');
        return;
    }
    if (!/^[a-zA-Z]{6}$/.test(login)) {
        exibirMensagem('Login deve conter exatamente 6 letras.');
        return;
    }
    if (!/^[a-zA-Z]{8}$/.test(senha)) {
        exibirMensagem('Senha deve conter exatamente 8 números.');
        return;
    }
    if (senha !== confirmaSenha) {
        exibirMensagem('Senhas não conferem.');
        return;
    }

    localStorage.setItem('login', login);
    localStorage.setItem('senha', senha);
    window.location.href = 'login.html';
});

function exibirMensagem(msg) {
    const div = document.getElementById('mensagem');
    div.textContent = msg;
    div.style.color = 'red';
}
