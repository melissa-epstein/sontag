(() => {
    window.addHeader();
    window.addFooter();
    const reviews = document.querySelectorAll('.quality__review');
    const dotContainer = document.querySelector('.quality__dots');
    const dots = [];
    let current = 0;
    reviews.forEach((review, i) => {
        const newDot = document.createElement('div');
        dots.push(newDot);
        newDot.addEventListener('click', () => {
            reviews[current].style.display = 'none';
            review.style.display = 'flex';
            dots[current].classList.remove('quality__dot--active');
            newDot.classList.add('quality__dot--active');
            current = i;
        });
        dotContainer.appendChild(newDot);
    });
    reviews[0].style.display = 'flex';
    dots[0].classList.add('quality__dot--active');
})();
