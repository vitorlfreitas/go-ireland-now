
document.addEventListener("DOMContentLoaded", function () {

    // Components
    const menuBurger = document.querySelector('.header__menu-mobile');
    const overlay = document.querySelector('.header__menu-mobile__overlay');
    const dropdown = document.querySelector('.header__menu-mobile__dropdown');
    const closeButton = document.querySelector('.close-button');


    menuBurger.addEventListener('click', () => {

        overlay.style.display = 'block';
        dropdown.style.display = 'flex';

        setTimeout(() => {
            
            overlay.style.opacity = '1';
    
            dropdown.style.transform = 'scaleX(1)';
        }, 100);

    
    });

    closeButton.addEventListener('click', () => {
        closeMenu();
    });

    overlay.addEventListener('click', () => {
        closeMenu();
    });

    function closeMenu() {

        
        overlay.style.opacity = '0';

        dropdown.style.transform = 'scaleX(0)';

        setTimeout(() => {
            overlay.style.display = 'none';
            dropdown.style.display = 'none';
        }, 250)
    }

});

