
document.addEventListener('DOMContentLoaded', () => {

    // 1. Ação do Botão "Jogar de Graça"
    const btnJogar = document.getElementById('btn-jogar');
    btnJogar.addEventListener('click', () => {
        alert('Redirecionando você para o servidor oficial de download da Steam...');
    });

    // 2. Manipulação do Formulário de Cadastro
    const formulario = document.getElementById('form-news');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); 
        
        const emailInformado = document.getElementById('email-user').value;
        console.log(`E-mail coletado: ${emailInformado}`); 

        // Oculta o formulário e exibe o feedback visual na tela
        formulario.style.display = 'none';
        msgSucesso.classList.remove('escondido');
    });
});