(() => {
    const header = document.querySelector('.header');
    header.innerHTML = `
    <dialog class="header__burger">
        <div class="header__burger-head">
            <a href="index.html"><img src="img/interface/logo-3.svg" class="header__logo"/></a>
            <button type="button" class="header__close"></button>
        </div>
        <nav class="header__links">
            <a href="about-us.html" class="header__link">О нас</a>
            <a href="#" class="header__link">Каталог курсов</a>
            <a href="#" class="header__link">Сертификаты</a>
            <a href="faq.html" class="header__link">F.A.Q.</a>
        </nav>
        <div class="header__media">
            <button class="header__button header__button--telegram"></button>
            <button class="header__button header__button--phone"></button>
            <button class="header__button header__button--mail"></button>
            <button class="header__button header__button--whatsapp"></button>
        </div>
    </dialog>
    <dialog class="header__contact">
        <img src="img/illustrations/lobster-phone.png" class="header__lobster"/>
        <button class="header__close-contact"></button>
        <p class="header__lets-call">Созвонимся?</p>
        <p class="header__leave-number">Оставьте свой номер телефона, чтобы мы связались с вами и ответили на все вопросы</p>
        <form class="header__form">
            <input type="text" name="name" id="name" placeholder="ваше имя" class="header__input"/>
            <input type="text" name="phone" id="phone" placeholder="номер телефона" class="header__input"/>
            <input type="submit" value="Позвонить мне" class="header__submit"/>
        </form>
    </dialog>
    <search class="header__search-field">
        <input name="search" id="search" type="text" placeholder="поиск по сайту">
        <img src="img/interface/arrow-white.svg">
    </search>
    <button type="button" class="header__search-1"></button>
    <a href="index.html"><img src="img/interface/logo-1.svg" class="header__logo"/></a>
    <button type="button" class="header__menu-button"></button>
    <nav class="header__menu">
        <a href="index.html" class="header__item">Главная</a>
        <a href="#" class="header__item">Каталог курсов</a>
        <a href="about-us.html" class="header__item">О нас</a>
    </nav>
    <div class="header__desktop-buttons">
        <button type="button" class="header__search-2"></button>
        <button type="button" class="header__mail"></button>
        <button type="button" class="header__phone"></button>
    </div>`;
})();
