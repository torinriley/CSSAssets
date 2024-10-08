const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        event.stopPropagation();
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

document.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
});
