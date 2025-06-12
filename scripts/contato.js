
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Captura dos valores do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validação básica
            if(name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }

            // Validação de e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido!');
                return;
            }

            // Simulação de envio
            console.log('Dados do formulário:');
            console.log('Nome:', name);
            console.log('Email:', email);
            console.log('Assunto:', subject);
            console.log('Mensagem:', message);

            // Feedback visual para o usuário
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);

            // Limpar formulário
            this.reset();
        });
    