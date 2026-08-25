const menuToggle = document.querySelector('#menuToggle');
const menuLista = document.querySelector('nav ul');
menuToggle.addEventListener('click', function() {
    menuLista.classList.toggle('menu-aberto');
});

const linksMenu = document.querySelectorAll('nav ul a');

linksMenu.forEach(function(link) {
    link.addEventListener('click', function() {
        menuLista.classList.remove('menu-aberto');
    });
});

const formulario = document.querySelector('form');
const mensagemSucesso = document.querySelector('#mensagemSucesso');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    mensagemSucesso.classList.add('visivel');
    formulario.reset();
});