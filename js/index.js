(() => {
    //Adding sliding of reviews:
    const reviews = document.querySelectorAll('.quality__review');
    const dotContainer = document.querySelector('.quality__dots');
    const dots = [];
    let current = 0;
    let switchingTimeOut;
    const switchingTime = 5000;
    const switchReview = (oldReview, newReview, oldDot, newDot) => {
        oldReview.style.display = 'none';
        newReview.style.display = 'flex';
        oldDot.classList.remove('quality__dot--active');
        newDot.classList.add('quality__dot--active');
    };
    const makeReviewLeave = (oldReview, newReview, oldDot, newDot) => {
        oldReview.classList.add('quality__review--must-leave');
        console.log(1);
        setTimeout(() => {
            switchReview(oldReview, newReview, oldDot, newDot);
            oldReview.classList.remove('quality__review--must-leave');
        }, 500);
    };
    reviews.forEach((review, i) => {
        const newDot = document.createElement('div');
        dots.push(newDot);
        newDot.addEventListener('click', () => {
            switchReview(reviews[current], review, dots[current], newDot);
            current = i;
            clearTimeout(switchingTimeOut);
            switchingTimeOut = setTimeout(showNextReview, switchingTime);
        });
        let initialX;
        review.addEventListener('touchstart', evt => {
            evt.preventDefault();
            clearTimeout(switchingTimeOut);
            const touch = evt.changedTouches[0];
            initialX = touch.pageX;
        });
        review.addEventListener('touchmove', evt => {
            evt.preventDefault();
            const touch = evt.changedTouches[0];
            review.style.transform = `translateX(${touch.pageX - initialX}px)`;
        });
        review.addEventListener('touchend', evt => {
            evt.preventDefault();
            review.style.transform = "none";
            const touch = evt.changedTouches[0];
            if (touch.pageX - initialX > review.offsetWidth / 3) {
                const previous = current;
                current++;
                if (current == reviews.length) {
                    current = 0;
                }
                switchReview(reviews[previous], reviews[current], dots[previous], dots[current]);
            }
            if (initialX - touch.pageX > review.offsetWidth / 3) {
                const previous = current;
                current--;
                if (current == -1) {
                    current = reviews.length - 1;
                }
                switchReview(reviews[previous], reviews[current], dots[previous], dots[current]);
            }
            switchingTimeOut = setTimeout(showNextReview, switchingTime);
        });
        dotContainer.appendChild(newDot);
    });
    switchReview(reviews[current], reviews[current], dots[current], dots[current]);
    const showNextReview = () => {
        const previous = current;
        current++;
        if (current == reviews.length) {
            current = 0;
        }
        makeReviewLeave(reviews[previous], reviews[current], dots[previous], dots[current]);
        switchingTimeOut = setTimeout(showNextReview, switchingTime);
    };
    switchingTimeOut = setTimeout(showNextReview, switchingTime);
    //Scrolling to contact form
    const contactForm = document.querySelector('.contact-us');
    const signUpButton = document.querySelector('.sing-up-please__button');
    signUpButton.addEventListener('click', () => contactForm.scrollIntoView({behavior: 'smooth', block: 'center'}));
})();
