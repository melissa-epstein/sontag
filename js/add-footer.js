(() => {
    const footer = document.querySelector('.footer');
    footer.innerHTML = `
    <a href="index.html"><img src="img/interface/logo-2.svg" class="footer__logo"/></a>
    <section class="footer__information">
        <nav class="footer__links">
            <a href="#" class="footer__link">О нас</a>
            <a href="#" class="footer__link">Курсы</a>
            <a href="#" class="footer__link">Сертификаты</a>
            <a href="faq.html" class="footer__link">F.A.Q.</a>
        </nav>
        <nav class="footer__buttons">
            <a href="#" class="footer__button footer__button--telegram"></a>
            <a href="index.html" class="footer__button footer__button--mail"></a>
            <a href="#" class="footer__button footer__button--whatsapp"></a>
        </nav>
        <address class="footer__contacts">
            <p class="footer__contact">+7 (999) 777-99-99 (whatsapp, tg)</p>
            <p class="footer__contact">sontagschool@gmail.com</p>
        </address>
    </section>
    <nav class="footer__formalities">
        <ul class="footer__agreement">
            <li class="footer__agreement-link footer__agreement-link--start"><a href="#">Политика конфиденциальности</a>/</li>
            <li class="footer__agreement-link footer__agreement-link--center"><a href="#">Пользовательское соглашение</a>/</li>
            <li class="footer__agreement-link footer__agreement-link--end"><a href="#">Оферта</a></li>
        </ul>
        <p class="footer__sontag">©Sontag, 2025</p>
    </nav>
    <section class="footer__organizations">
        <p class="footer__organization">ИП Юхименко Анастасия Юльевна<br>ИНН</p>
        <p class="footer__organization">ОГРНИП</p>
    </section>`;
})();
