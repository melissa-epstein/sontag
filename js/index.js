(() => {
    //Button to contact form
    const contactForm = document.querySelector('.contact-us');
    const signUpButton = document.querySelector('.sing-up-please__button');
    signUpButton.addEventListener('click', () => contactForm.scrollIntoView({behavior: 'smooth', block: 'center'}));
    //Running slider of reviews
    window.runSlider(document, 'quality', 5000, 500);
    //Validating the tel input
    window.handlePhoneInput(document.getElementById('your-phone'));
})();
