const calc = () => {

    const cardOrder = document.getElementById('card_order'),
        firstClub = document.getElementById('m1'),
        secondClub = document.getElementById('m2'),
        thirdClub = document.getElementById('m3'),
        fourthClub = document.getElementById('m4'),
        priceTotal = document.getElementById('price-total'),
        cardMozaika = document.getElementById('card_leto_mozaika'),
        cardSchelkovo = document.getElementById('card_leto_schelkovo');

    let total = 1999;


    //Функция, которая считает итоговую цену
    cardOrder.addEventListener('click', (event) => {
        const target = event.target;

        if (cardMozaika.checked === true) {
            if (target === firstClub) {
                total = 1999;
            } else if (target === secondClub) {
                total = 9900;
            } else if (target === thirdClub) {
                total = 13900;
            } else if (target === fourthClub) {
                total = 19900;
            }
        } else if (cardSchelkovo.checked === true) {
            if (target === firstClub) {
                total = 2999;
            } else if (target === secondClub) {
                total = 14990;
            } else if (target === thirdClub) {
                total = 21990;
            } else if (target === fourthClub) {
                total = 24990;
            }
        }

        priceTotal.textContent = total;

    });


};

export default calc;