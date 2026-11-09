// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {

    // 1. Ação do Botão "Jogar de Graça"
    const btnJogar = document.getElementById('btn-jogar');
    btnJogar.addEventListener('click', () => {
        alert('Redirecionando você para o servidor oficial de download da Steam...');
        // Em um cenário real, você usaria: window.location.href = "URL_DA_STEAM";
    });

    // 2. Manipulação do Formulário de Cadastro
    const formulario = document.getElementById('form-news');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede a página de recarregar
        
        const emailInformado = document.getElementById('email-user').value;
        console.log(`E-mail coletado: ${emailInformado}`); // Registro interno de desenvolvedor

        // Oculta o formulário e exibe o feedback visual na tela
        formulario.style.display = 'none';
        msgSucesso.classList.remove('escondido');
    });
});