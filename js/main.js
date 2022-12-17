//Topbar On Scroll
window.addEventListener('scroll', function () {
    var header = document.querySelector('topbar');
    header.classList.toggle('sticky', window.scrollY > 0);
});
//Loading Screen
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader")
    })
})