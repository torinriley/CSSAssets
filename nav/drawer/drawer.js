const menuTrigger = document.querySelector('.menu-trigger');
const drawerMenu = document.querySelector('.drawer-menu');

menuTrigger.addEventListener('click', () => {
    drawerMenu.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!drawerMenu.contains(event.target) && !menuTrigger.contains(event.target)) {
        drawerMenu.classList.remove('open');
    }
});