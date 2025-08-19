document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeSwitcher = document.querySelector('.theme-switcher');

    themeSwitcher.addEventListener('click', (event) => {
        // Pega o botão clicado
        const clickedButton = event.target;
        
        // Verifica se o elemento clicado é um botão com o atributo data-theme
        if (clickedButton.matches('button[data-theme]')) {
            // Pega o valor do atributo data-theme do botão
            const themeName = clickedButton.dataset.theme;

            // Define o atributo data-theme do <body> para o valor do botão
            body.setAttribute('data-theme', themeName);
        }
    });
});