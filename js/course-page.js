(() => {
    // Sign-up button
    const contactForm = document.querySelector('.contact-us');
    const signUpButton = document.querySelector('.course__sign-up');
    signUpButton.addEventListener('click', () => contactForm.scrollIntoView({behavior: 'smooth', block: 'center'}));
    //Running questions
    window.runQuestions('course');
})();
