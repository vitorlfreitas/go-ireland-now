document.addEventListener('DOMContentLoaded', () => {


    const menu = document.querySelector('.header__menu__dropdown');
    const dropdown = document.querySelector('.header__menu-nav__dropdown');
    let isOpened = false;


    menu.addEventListener('click', () => {
        if (isOpened) {
            dropdown.style.transform = 'scaleY(0)';
            isOpened = false;
        }
        else {
            dropdown.style.transform = 'scaleY(1)';
            isOpened = true;
        }
    });



});
