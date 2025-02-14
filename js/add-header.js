(() => {
    window.addHeader = () => {
        //Adding a header
        const header = document.querySelector('.header');
        header.innerHTML = `
        <div class="header__burger">
            <div class="header__burger-head">
                <img src="img/interface/logo-3.svg" class="header__logo"/>
                <button type="button" class="header__close"></button>
            </div>
            <menu class="header__links">
                <a href="#" class="header__link"><li>О нас</li></a>
                <a href="#" class="header__link"><li>Каталог курсов</li></a>
                <a href="#" class="header__link"><li>Сертификаты</li></a>
                <a href="#" class="header__link"><li>F.A.Q.</li></a>
            </menu>
            <div class="header__media">
                <button class="header__button header__button--telegram"></button>
                <button class="header__button header__button--phone"></button>
                <button class="header__button header__button--mail"></button>
                <button class="header__button header__button--whatsapp"></button>
            </div>
        </div>
        <div class="header__contact">
            <img src="img/illustrations/lobster-phone.png" class="header__lobster"/>
            <button class="header__close-contact"></button>
            <p class="header__lets-call">Созвонимся?</p>
            <p class="header__leave-number">Оставьте свой номер телефона, чтобы мы связались с вами и ответили на все вопросы</p>
            <form class="header__form">
                <input type="text" name="name" id="name" placeholder="ваше имя" class="header__input"/>
                <input type="text" name="phone" id="phone" placeholder="номер телефона" class="header__input"/>
                <input type="submit" value="Позвонить мне" class="header__submit"/>
            </form>
        </div>
        <div class="header__search-field">
            <input name="search" id="search" type="text" placeholder="поиск по сайту">
            <img src="img/interface/arrow-white.svg">
        </div>
        <button type="button" class="header__search-1"></button>
        <img src="img/interface/logo-1.svg" class="header__logo"/>
        <button type="button" class="header__menu-button"></button>
        <menu class="header__menu">
            <a href="index.html" class="header__item"><li>Главная</li></a>
            <a href="#" class="header__item"><li>Каталог курсов</li></a>
            <a href="#" class="header__item"><li>О нас</li></a>
        </menu>
        <div class="header__desktop-buttons">
            <button type="button" class="header__search-2"></button>
            <button type="button" class="header__mail"></button>
            <button type="button" class="header__phone"></button>
        </div>`;
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
        const mailButton = header.querySelector('.header__mail');
        mailButton.addEventListener('click', () => window.scrollTo(0, document.body.scrollHeight));
    };
})();
