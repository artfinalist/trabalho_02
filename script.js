document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário de contato pelo ID
    const contactForm = document.getElementById('contact-form');
    // Seleciona o elemento onde a mensagem será exibida
    const formMessage = document.getElementById('form-message');

    // Adiciona um 'ouvinte de evento' para o envio do formulário
    contactForm.addEventListener('submit', (e) => {
        // Previne o comportamento padrão do formulário, que é recarregar a página
        e.preventDefault();

        // Obtém os valores dos campos do formulário
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Verifica se todos os campos estão preenchidos
        if (name === '' || email === '' || message === '') {
            // Se algum campo estiver vazio, exibe uma mensagem de erro
            displayMessage('Por favor, preencha todos os campos.', 'error');
            return; // Interrompe a execução da função
        }

        // Simula o envio de dados para um servidor
        // Na vida real, você faria uma requisição (fetch) aqui
        console.log('Dados do formulário enviados:');
        console.log(`Nome: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Mensagem: ${message}`);

        // Exibe uma mensagem de sucesso para o usuário
        displayMessage('Sua mensagem foi enviada com sucesso!', 'success');
        
        // Reseta o formulário após o envio
        contactForm.reset();
    });

 
    function displayMessage(text, type) {
        // Limpa qualquer classe e conteúdo anterior
        formMessage.textContent = '';
        formMessage.className = '';

        // Define o texto da mensagem e adiciona a classe correspondente ao tipo
        formMessage.textContent = text;
        formMessage.classList.add(type);

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 5000);
    }

    // Seleciona todos os links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        // Adiciona um 'ouvinte de evento' para o clique em cada link
        anchor.addEventListener('click', function (e) {
            // Previne o comportamento padrão (salto instantâneo)
            e.preventDefault();

            // Rola suavemente para a seção correspondente ao href do link
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});