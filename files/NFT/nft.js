const btn = document.querySelector('.hamburger');
const menu = document.getElementById('mobile-items');

menu.style.display = 'none';

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
} else {
    menu.style.display = 'none';
    }
});
