// selecionando elementos do dom
const menu_nav = document.querySelector('#menu-nav');
const button_menu = document.querySelector('#button-menu');
const div_fechar_menu = document.querySelector('#fechar-menu');
let altura_body = String(document.body.clientHeight);


// criando função para mostrar o menu
function mostrarMenu() {
    menu_nav.style.width = '70%';
    button_menu.setAttribute('onclick', 'ocultarMenu()');
    div_fechar_menu.style.display = 'block';
    div_fechar_menu.style.height = `${altura_body}px`;
};


// criando função para ocultar o menu
function ocultarMenu() {
    menu_nav.style.width = '0';
    button_menu.setAttribute('onclick', 'mostrarMenu()');
    div_fechar_menu.style.display = 'none';
};