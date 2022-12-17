//Topbar On Scroll
window.addEventListener('scroll', function () {
    var header = document.querySelector('topbar');
    header.classList.toggle('sticky', window.scrollY > 0);
});
