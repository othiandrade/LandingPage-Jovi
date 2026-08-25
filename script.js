const menuToggle = document.querySelector('#menuToggle');
const menuLista = document.querySelector('nav ul');
menuToggle.addEventListener('click', function() {
    menuLista.classList.toggle('menu-aberto');
});