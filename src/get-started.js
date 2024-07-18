const button = document.querySelector(".page-header__link");

const form = document.querySelector(".form-container");
const formPopUp = document.querySelector(".form-popup");
const overlay = document.querySelector('.overlay');
const xClose = document.querySelector('.form-close-icon');
const submit = document.querySelector('form-button');


button.addEventListener('click', () => {
    form.style.transform = "scale(1)";
    formPopUp.style.transform = "rotate(0)";
    
});

overlay.addEventListener('click', () => {
    form.style.transform = "scale(0)";
    formPopUp.style.transform = "rotate(540deg)";
});

xClose.addEventListener('click', () => {
    form.style.transform = "scale(0)";
    formPopUp.style.transform = "rotate(540deg)";
});

