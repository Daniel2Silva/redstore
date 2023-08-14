const menu = document.querySelector('.botao-menu');
function ativarMenu(){
    const nav = document.querySelector('.js-menu');
    nav.classList.toggle('ativo');
}

menu.addEventListener('click', ativarMenu);