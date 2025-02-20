(() => {
    // Sign-up button
    const contactForm = document.querySelector('.contact-us');
    const signUpButton = document.querySelector('.course__sign-up');
    signUpButton.addEventListener('click', () => contactForm.scrollIntoView({behavior: 'smooth', block: 'center'}));
    //Running questions
    window.runQuestions('course');
    //Running modules
    const addClickListener = (currentModule, nextModule) => {
        currentModule.querySelector('.program__next').addEventListener('click', () => {
            currentModule.classList.add('program__module--gotta-leave');
            nextModule.style.display = 'flex';
            setTimeout(() => {
                currentModule.style.display = 'none';
                currentModule.classList.remove('program__module--gotta-leave');
            }, 1000);
        });
    };
    const modules = document.querySelectorAll('.program__module');
    for (let i = 1; i < modules.length; i++) {
        modules[i].style.display = 'none';
    }
    for (let i = 0; i < modules.length - 1; i++) {
        addClickListener(modules[i], modules[i + 1]);
    }
    addClickListener(modules[modules.length - 1], modules[0]);
})();
