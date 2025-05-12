
const form = document.getElementById('cadastroForm');
        const mensagem = document.getElementById('mensagem');

        function exibirMensagem(texto, tipo) {
            mensagem.textContent = texto;
            mensagem.className = `message ${tipo}`;
            mensagem.style.display = 'block';
        }

        function validarFormulario(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const dataNascimento = document.getElementById('dataNascimento').value;
            const sexo = document.getElementById('sexo').value;
            const nomeMaterno = document.getElementById('nomeMaterno').value.trim();
            const cpf = document.getElementById('cpf').value.trim();
            const celular = document.getElementById('celular').value.trim();
            const fixo = document.getElementById('fixo').value.trim();
            const endereco = document.getElementById('endereco').value.trim();
            const login = document.getElementById('login').value.trim();
            const senha = document.getElementById('senha').value;
            const confirmaSenha = document.getElementById('confirmaSenha').value;

            const telefoneRegex = /^\(\+55\)\d{2}-\d{8}$/;
            const letrasRegex = /^[A-Za-z]+$/;

            if (!nome || !dataNascimento || !sexo || !nomeMaterno || !cpf || !celular || !fixo || !endereco || !login || !senha) {
                return exibirMensagem("Todos os campos devem ser preenchidos.", "error");
            }

            if (nome.length < 15 || nome.length > 60 || !letrasRegex.test(nome.replace(/\s+/g, ''))) {
                return exibirMensagem("O nome deve conter de 15 a 60 caracteres alfabéticos.", "error");
            }

            if (!telefoneRegex.test(celular) || !telefoneRegex.test(fixo)) {
                return exibirMensagem("Telefones devem estar no formato (+55)XX-XXXXXXXX.", "error");
            }

            if (login.length !== 6 || !letrasRegex.test(login)) {
                return exibirMensagem("O login deve conter exatamente 6 letras.", "error");
            }

            if (senha.length !== 8 || !letrasRegex.test(senha)) {
                return exibirMensagem("A senha deve conter exatamente 8 letras.", "error");
            }

            if (senha !== confirmaSenha) {
                return exibirMensagem("As senhas não coincidem.", "error");
            }

            exibirMensagem("Cadastro realizado com sucesso!", "success");
            // Aqui poderia enviar o formulário com form.submit() ou via fetch/AJAX
        }

        form.addEventListener('submit', validarFormulario);
