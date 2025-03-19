(() => {
    window.runSlider = (container, section, interval, switchTIme, slidingEase = 2) => {
        const reviews = container.querySelectorAll(`.${section}__item`);
        const dotContainer = container.querySelector(`.${section}__dots`);
        const dots = [];
        let current = 0;
        let switchingTimeOut;
        const switchReview = (oldReview, newReview, oldDot, newDot) => {
            oldReview.style.display = 'none';
            newReview.style.display = 'flex';
            oldDot.classList.remove(`${section}__dot--active`);
            newDot.classList.add(`${section}__dot--active`);
        };
        const makeReviewLeave = (oldReview, newReview, oldDot, newDot) => {
            oldReview.classList.add(`${section}__item--must-leave`);
            setTimeout(() => {
                switchReview(oldReview, newReview, oldDot, newDot);
                oldReview.classList.remove(`${section}__item--must-leave`);
            }, switchTIme);
        };
        reviews.forEach((review, i) => {
            review.style.display = 'none';
            const newDot = document.createElement('div');
            dots.push(newDot);
            newDot.addEventListener('click', () => {
                makeReviewLeave(reviews[current], review, dots[current], newDot);
                current = i;
                clearTimeout(switchingTimeOut);
                switchingTimeOut = setTimeout(showNextReview, interval);
            });
            let initialX;
            review.addEventListener('touchstart', evt => {
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
                review.style.transform = 'none';
                const touch = evt.changedTouches[0];
                if (touch.pageX - initialX > review.offsetWidth / slidingEase) {
                    const previous = current;
                    current++;
                    if (current == reviews.length) {
                        current = 0;
                    }
                    switchReview(reviews[previous], reviews[current], dots[previous], dots[current]);
                }
                if (initialX - touch.pageX > review.offsetWidth / slidingEase) {
                    const previous = current;
                    current--;
                    if (current == -1) {
                        current = reviews.length - 1;
                    }
                    switchReview(reviews[previous], reviews[current], dots[previous], dots[current]);
                }
                switchingTimeOut = setTimeout(showNextReview, interval);
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
            switchingTimeOut = setTimeout(showNextReview, interval);
        };
        switchingTimeOut = setTimeout(showNextReview, interval);
    };
})();
