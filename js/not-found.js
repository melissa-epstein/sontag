(() => {
    const addClickListener = (currentCourse, nextCourse, currentDot, nextDot) => {
        currentCourse.querySelector('.not-found__next').addEventListener('click', () => {
            currentDot.classList.remove('not-found__dot--active');
            currentCourse.classList.add('not-found__course--gotta-leave');
            nextDot.classList.add('not-found__dot--active');
            nextCourse.style.display = 'block';
            setTimeout(() => {
                currentCourse.style.display = 'none';
                currentCourse.classList.remove('not-found__course--gotta-leave');
            }, 1000);
        });
    };
    const courses = document.querySelectorAll('.not-found__course');
    const dotContainer = document.querySelector('.not-found__dots');
    const dots = [];
    for (let i = 0; i < courses.length; i++) {
        dots.push(document.createElement('div'));
        dotContainer.appendChild(dots[dots.length - 1]);
    }
    dots[0].classList.add('not-found__dot--active');
    for (let i = 1; i < courses.length; i++) {
        courses[i].style.display = 'none';
    }
    for (let i = 0; i < courses.length - 1; i++) {
        addClickListener(courses[i], courses[i + 1], dots[i], dots[i + 1]);
    }
    addClickListener(courses[courses.length - 1], courses[0], dots[courses.length - 1], dots[0]);
})();
