const burgerBtn = document.getElementById('burger');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.tap');
const hiddenWindow = document.querySelector('.window');

burgerBtn.onclick = () => {
    navbar.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
    hiddenWindow.style.display = 'block';

    links.forEach(link => link.addEventListener("click", closeNavbar));

    hiddenWindow.onclick = closeNavbar;
}

function closeNavbar() {
    navbar.style.display = 'none';
    document.body.style.overflowY = '';
    hiddenWindow.style.display = 'none';
}