(() => {
    const isGidit = char => char >= '0' && char <= '9';
    const getDigits = string => {
        let result = 0;
        string.split('').forEach(char => {
            if (isGidit(char)) {
                result++;
            }
        });
        return result;
    };
    window.handlePhoneInput = (element) => {
        element.addEventListener('focus', () => {
            if (element.value.length < 4) {
                element.value = '+7(';
            }
        });
        element.addEventListener('input', event => {
            if (event.data == null) {
                if (element.value.length < 4) {
                    element.value = '+7(';
                }
                if (element.value.length == 6) {
                    element.value = element.value.substring(0, element.value.length - 1);
                }
                const extraDigits = getDigits(element.value) - 7;
                if (extraDigits >= 0 && !(extraDigits % 2)) {
                    element.value = element.value.substring(0, element.value.length - 1);
                }
            } else {
                if (!isGidit(event.data)) {
                    element.value = element.value.substring(0, element.value.length - 1);
                }
                if (element.value.length == 6) {
                    element.value += ')';
                }
                const extraDigits = getDigits(element.value) - 8;
                if (extraDigits >= 0 && !(extraDigits % 2)) {
                    element.value = element.value.substring(0, element.value.length - 1) + '-' + event.data;
                }
            }
        });
    };
})();
