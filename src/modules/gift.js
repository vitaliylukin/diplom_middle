const gift = () => {

    try {
        const popUp = document.getElementById('gift'),
            popUpBtn = document.querySelector('.fixed-gift');

        /*Open popUp*/
        popUpBtn.addEventListener('click', () => {
            popUp.style.display = 'block';
            popUpBtn.style.display = 'none';
        });

        /*Close popUp*/
        popUp.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                popUp.style.display = 'none';
            } else {
                target = target.closest('.form-wrapper');
                if (!target) {
                    popUp.style.display = 'none';
                }
            }

        });
    } catch (e) {

    }

};

export default gift;