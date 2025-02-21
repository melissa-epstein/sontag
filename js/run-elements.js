(() => {
    const addClickListener = (section, currentItem, nextItem, currentDot, nextDot, animationTime) => {
        currentItem.querySelector(`.${section}__next`).addEventListener('click', () => {
            currentDot.classList.remove(`${section}__dot--active`);
            currentItem.classList.add(`${section}__item--gotta-leave`);
            nextDot.classList.add(`${section}__dot--active`);
            nextItem.style.display = 'block';
            setTimeout(() => {
                currentItem.style.display = 'none';
                currentItem.classList.remove(`${section}__item--gotta-leave`);
            }, animationTime);
        });
    };
    window.runElements = (container, section, animationTime) => {
        const items = container.querySelectorAll(`.${section}__item`);
        const dotContainer = container.querySelector(`.${section}__dots`);
        const dots = [];
        for (let i = 0; i < items.length; i++) {
            dots.push(document.createElement('div'));
            dotContainer.appendChild(dots[dots.length - 1]);
        }
        dots[0].classList.add(`${section}__dot--active`);
        for (let i = 1; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        for (let i = 0; i < items.length - 1; i++) {
            addClickListener(section, items[i], items[i + 1], dots[i], dots[i + 1], animationTime);
        }
        addClickListener(section, items[items.length - 1], items[0], dots[items.length - 1], dots[0], animationTime);
    };
})();
