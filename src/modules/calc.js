const calc = () => {

    const cardOrder = document.getElementById('card_order'),
        firstClub = document.getElementById('m1'),
        secondClub = document.getElementById('m2'),
        thirdClub = document.getElementById('m3'),
        fourthClub = document.getElementById('m4'),
        priceTotal = document.getElementById('price-total'),
        cardMozaika = document.getElementById('card_leto_mozaika'),
        promoCode = document.querySelector('.price-message > input');

    let total;

    const countSum = () => {
        if (cardMozaika.checked === true) {
            if (firstClub.checked === true) {
                total = 1999;
            } else if (secondClub.checked === true) {
                total = 9900;
            } else if (thirdClub.checked === true) {
                total = 13900;
            } else if (fourthClub.checked === true) {
                total = 19900;
            }
        } else if (cardMozaika.checked === false) {
            if (firstClub.checked === true) {
                total = 2999;
            } else if (secondClub.checked === true) {
                total = 14990;
            } else if (thirdClub.checked === true) {
                total = 21990;
            } else if (fourthClub.checked === true) {
                total = 24990;
            }
        }

        if (promoCode.value === 'ТЕЛО2020') {
            const percent = total / 100 * 30;
            total -= percent;
            total = Math.ceil(total);
            priceTotal.textContent = total;
        } else {
            priceTotal.textContent = total;
        }

    };

    cardOrder.addEventListener('change', () => {
        countSum();
    });

};

export default calc;