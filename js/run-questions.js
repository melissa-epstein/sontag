(() => {
    window.runQuestions = (section) => {
        const questions = document.querySelectorAll(`.${section}__question`);
        const answers = document.querySelectorAll(`.${section}__answer`);
        questions.forEach((question, i) => {
            question.addEventListener('click', () => {
                if (!question.classList.contains(`${section}__question--opened`)) {
                    question.classList.remove(`${section}__question--closed`);
                    answers[i].classList.remove(`${section}__answer--closed`);
                    question.classList.add(`${section}__question--opened`);
                    answers[i].classList.add(`${section}__answer--opened`);
                } else {
                    question.classList.remove(`${section}__question--opened`);
                    answers[i].classList.remove(`${section}__answer--opened`);
                    question.classList.add(`${section}__question--closed`);
                    answers[i].classList.add(`${section}__answer--closed`);
                }
            });
        });
    };
})();
