const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.responsive-navbar ul');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

