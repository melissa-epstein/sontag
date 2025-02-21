(() => {
    //Adding button for gifting
    const contactForm = document.querySelector('.contact-us');
    const giftButton = document.querySelector('.sertificate__button');
    giftButton.addEventListener('click', () => contactForm.scrollIntoView({behavior: 'smooth', block: 'center'}));
    //Running benefits
    window.runElements(document.querySelector('.benefits'), 'benefits', 1000);
})();
