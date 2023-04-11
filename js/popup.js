let button = document.querySelectorAll('.doi-ngu');
let popupdata = document.querySelector(".popup");
let closed = document.querySelectorAll('.close');
    button[0].addEventListener('click', () => {
        popupdata.style.display = "flex";
       })
    closed[0].addEventListener('click', () => {
        popupdata.style.display = "none";
    })