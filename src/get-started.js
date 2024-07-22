const button = document.querySelector(".page-header__link");
const formContainer = document.querySelector(".form-container");
const formPopUp = document.querySelector(".form-popup");
const overlay = document.querySelector('.overlay');
const xClose = document.querySelector('.form-close-icon');
const submitButton = document.querySelector('.form-button');
const confirmationPopup = document.querySelector('.confirmation-popup');
const form = document.getElementById('myForm');

// Mostrar o formulário e limpar os campos
button.addEventListener('click', () => {
    formContainer.style.transform = "scale(1)";
    formPopUp.style.transform = "rotate(0)";
    clearFormFields();
});

// Fechar o formulário
overlay.addEventListener('click', closeForm);
xClose.addEventListener('click', closeForm);

function closeForm() {
    formContainer.style.transform = "scale(0)";
    formPopUp.style.transform = "rotate(540deg)";
}

// Enviar o formulário e mostrar o pop-up de confirmação
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o envio do formulário para fins de demonstração

    // Fechar o formulário
    closeForm();

    // Mostrar o pop-up de confirmação
    confirmationPopup.style.display = 'block';
    setTimeout(() => {
        confirmationPopup.style.opacity = '1';
    }, 200);

    // Ocultar o pop-up de confirmação após 2 segundos
    setTimeout(() => {
        confirmationPopup.style.opacity = '0';
        setTimeout(() => {
            confirmationPopup.style.display = 'none';
        }, 500); // Aguarda a transição de opacidade antes de ocultar
    }, 2500);

    clearFormFields();
});

// Limpar os campos do formulário
function clearFormFields() {
    form.reset();
}
