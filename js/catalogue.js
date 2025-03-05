(() => {
    //Repeating items in slider or header
    const cloneItems = (container) => {
        const slider = document.querySelector(container);
        const item = slider.querySelector('.catalogue__clone');
        for (let i = 0; i < 4; i++) {
            slider.appendChild(item.cloneNode(true));
        }
    };
    cloneItems('.catalogue__slide--to-left');
    cloneItems('.catalogue__slide--to-right');
    //Sign-up button
    const contactForm = document.querySelector('.contact-us');
    const signUpButton = document.querySelector('.catalogue__sign-up-button');
    signUpButton.addEventListener('click', () => contactForm.scrollIntoView({behavior: 'smooth', block: 'center'}));
    //Running sliders
    const grades = document.querySelectorAll('.catalogue__grade');
    grades.forEach(grade => window.runElements(grade, 'catalogue', 1000));
    //Validating the tel input
    window.handlePhoneInput(document.getElementById('your-phone'));
})();
