const callbackForm = () => {

    //Mask for phone
    maskPhone('#callback_form1-phone');

    const popUp = document.getElementById('callback_form'),
        popUpBtn = document.querySelector('button[data-popup="#callback_form"]');

    /*Open popUp*/
    popUpBtn.addEventListener('click', () => {
        popUp.style.display = 'block';
    });

    /*Close popUp*/
    popUp.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close_icon')) {
            popUp.style.display = 'none';
        } else {
            target = target.closest('.form-wrapper');
            if (!target) {
                popUp.style.display = 'none';
            }
        }

    });

};

export default callbackForm;