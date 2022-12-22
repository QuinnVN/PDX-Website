let menuBtn = document.getElementById('mobile-menu-btn');
let header = document.getElementById('topbar');
let height = header.clientHeight;

let menuItems = document.querySelectorAll('#navbar li a[href*="#"]');
//đóng mở menu
menuBtn.onclick = () => {
    if (header.clientHeight === 60) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
};

//tự động đóng menu
for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];

    item.onclick = () => {
        header.style.height = null;
    };
}
