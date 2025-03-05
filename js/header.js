(() => {
    const header = document.querySelector('.header');
    //Opening a menu on mobile
    const menuButton = header.querySelector('.header__menu-button');
    const menu = header.querySelector('.header__burger');
    menuButton.addEventListener('click', () => {
        menu.classList.add('header__burger--must-appear');
        menu.classList.remove('header__burger--must-disappear');
    });
    const closeMenuButton = header.querySelector('.header__close');
    closeMenuButton.addEventListener('click', () => {
        menu.classList.add('header__burger--must-disappear');
        menu.classList.remove('header__burger--must-appear');
    });
    //Opening contact form
    const contactButtons = [header.querySelector('.header__button--phone'), header.querySelector('.header__phone')];
    const contact = header.querySelector('.header__contact');
    contactButtons.forEach(button => button.addEventListener('click', () => {
        contact.classList.add('header__contact--must-appear');
        contact.classList.remove('header__contact--must-disappear');
    }));
    const closeContactButton = header.querySelector('.header__close-contact');
    closeContactButton.addEventListener('click', () => {
        contact.classList.add('header__contact--must-disappear');
        contact.classList.remove('header__contact--must-appear');
    });
    //Adding a search
    const searchButtons = [header.querySelector('.header__search-1'), header.querySelector('.header__search-2')];
    const search = header.querySelector('.header__search-field');
    let isSearchHovered = false;
    search.addEventListener('mouseover', () => {
        isSearchHovered = true;
    });
    search.addEventListener('mouseout', () => {
        isSearchHovered = false;
    });
    const hideSearch = () => {
        if (!isSearchHovered) {
            search.style.display = 'none';
            document.removeEventListener('mousedown', hideSearch);
        }
    }
    searchButtons.forEach(button => button.addEventListener('click', () => {
        search.style.display = 'flex';
        document.addEventListener('mousedown', hideSearch);
    }));
    //Adding jumping to bottom of the page by buttons
    const footer = document.querySelector('.footer');
    const mailButton = header.querySelector('.header__mail');
    mailButton.addEventListener('click', () => footer.scrollIntoView({behavior: 'smooth'}));
    //Validating the tel input
    window.handlePhoneInput(document.getElementById('phone'));
})();
