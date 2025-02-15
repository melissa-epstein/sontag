(() => {
    const questions = document.querySelectorAll('.faq__question');
    const answers = document.querySelectorAll('.faq__answer');
    questions.forEach((question, i) => {
        question.addEventListener('click', () => {
            if (!question.classList.contains('faq__question--opened')) {
                question.classList.remove('faq__question--closed');
                answers[i].classList.remove('faq__answer--closed');
                question.classList.add('faq__question--opened');
                answers[i].classList.add('faq__answer--opened');
            } else {
                question.classList.remove('faq__question--opened');
                answers[i].classList.remove('faq__answer--opened');
                question.classList.add('faq__question--closed');
                answers[i].classList.add('faq__answer--closed');
            }
        });
    });
})();
