const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 600) {
        header.classList.add('scrolled');
    } else if (window.scrollY <= 600) {
        header.classList.remove('scrolled');
    }
});
