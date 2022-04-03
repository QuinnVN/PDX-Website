const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-list li ');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 900) {
        header.classList.add('scrolled');
    } else if (window.scrollY <= 900) {
        header.classList.remove('scrolled');
    }

    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
            console.log(current);
        }
    });

    links.forEach((li) => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });
});
