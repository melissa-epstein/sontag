(() => {
    window.addFooter = () => {
        const footer = document.querySelector('.footer');
        footer.innerHTML = `
        <img src="img/interface/logo-2.svg" class="footer__logo"/>
        <section class="footer__information">
            <div class="footer__links">
                <a href="#" class="footer__link">О нас</a>
                <a href="#" class="footer__link">Курсы</a>
                <a href="#" class="footer__link">Сертификаты</a>
                <a href="#" class="footer__link">F.A.Q.</a>
            </div>
            <div class="footer__buttons">
                <a href="#" class="footer__button footer__button--telegram"></a>
                <a href="index.html" class="footer__button footer__button--mail"></a>
                <a href="#" class="footer__button footer__button--whatsapp"></a>
            </div>
            <div class="footer__contacts">
                <p class="footer__contact">+7 (999) 777-99-99 (whatsapp, tg)</p>
                <p class="footer__contact">sontagschool@gmail.com</p>
            </div>
        </section>
        <section class="footer__formalities">
            <div class="footer__agreement">
                <p class="footer__agreement-link footer__agreement-link--start"><a href="#">Политика конфиденциальности</a>/</p>
                <p class="footer__agreement-link footer__agreement-link--center"><a href="#">Пользовательское соглашение</a>/</p>
                <p class="footer__agreement-link footer__agreement-link--end"><a href="#">Оферта</a></p>
            </div>
            <p class="footer__sontag">©Sontag, 2025</p>
        </section>
        <section class="footer__organizations">
            <p class="footer__organization">ИП Юхименко Анастасия Юльевна<br>ИНН</p>
            <p class="footer__organization">ОГРНИП</p>
        </section>
        `;
    };
})();
