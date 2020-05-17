const calc = () => {

    const cardOrder = document.getElementById('card_order'),
        firstClub = document.getElementById('m1'),
        secondClub = document.getElementById('m2'),
        thirdClub = document.getElementById('m3'),
        fourthClub = document.getElementById('m4'),
        priceTotal = document.getElementById('price-total'),
        cardMozaika = document.getElementById('card_leto_mozaika'),
        cardSchelkovo = document.getElementById('card_leto_schelkovo');


    let total = 2999;

    //Функция, которая считает итоговую цену
    cardOrder.addEventListener('click', (event) => {
        const target = event.target;

        const countFirst = () => {
            if (target === firstClub) {
                total = 1999;
            }
            if (target === secondClub) {
                total = 9900;
            }
            if (target === thirdClub) {
                total = 13900;
            }
            if (target === fourthClub) {
                total = 19900;
            }

        };

        const countSecond = () => {
            if (target === firstClub) {
                total = 2999;
            }
            if (target === secondClub) {
                total = 14990;
            }
            if (target === thirdClub) {
                total = 21990;
            }
            if (target === fourthClub) {
                total = 24990;
            }

        };

        if (cardMozaika.checked === true) {
            countFirst();
        } else if (cardSchelkovo.checked === true) {
            countSecond();
        }

        priceTotal.textContent = total;

    });

};

export default calc;