document.addEventListener('DOMContentLoaded', () => {

    // THIS CODE NEEDS TO BE REFACTORED!

    const buttonEnglish = document.getElementById('en');
    const buttonPortuguese = document.getElementById('pt');

    const storedLang = localStorage.getItem("language");

    if (storedLang === "en") {
        changeLanguage('en');
        buttonEnglish.classList.add("button-active");
        buttonPortuguese.classList.remove("button-active");
    } else if (storedLang === "pt") {
        changeLanguage('pt');
        buttonEnglish.classList.remove("button-active");
        buttonPortuguese.classList.add("button-active");
    }

    buttonEnglish.addEventListener('click', () => {

        if (buttonEnglish.classList.contains("button-active")) {
            return;
        }
        
        buttonEnglish.classList.add("button-active");
        buttonPortuguese.classList.remove("button-active");

        changeLanguage('en');

        localStorage.setItem("language", "en");

    })

    buttonPortuguese.addEventListener('click', () => {

        if (buttonPortuguese.classList.contains("button-active")) {
            return;
        }
        buttonEnglish.classList.remove("button-active");
        buttonPortuguese.classList.add("button-active");

        changeLanguage('pt');

        localStorage.setItem("language", "pt");

    })


    function changeLanguage(language) {
        
        const elements = document.querySelectorAll('[data-' + language + ']');
    
        
        elements.forEach(element => {
            element.textContent = element.getAttribute('data-' + language);
        });
    
        
        document.documentElement.lang = language;
    }

});