const sendForm = () => {

    //Mask for phone
    maskPhone('#phone');
    maskPhone('#callback_footer_form-phone');
    maskPhone('#callback_form-phone');

    const form = document.querySelectorAll('form'),
        popUpThanks = document.getElementById('thanks'),
        popUpCallback = document.getElementById('callback_form'),
        popUpVisit = document.getElementById('free_visit_form'),
        inputPrice = document.querySelector('.input-price');

    console.log(inputPrice);

    //Status Message
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = ` margin-top: 10px; color: #fff;`;
    statusMessage.textContent = 'Идет отправка...';

    const outputData = () => {
        form.forEach((elem) => {
            elem.reset();
        });
    };

    //Success Message
    const successMessage = () => {
        popUpThanks.style.display = 'block';
        /*Close popUpThanks*/
        popUpThanks.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                popUpThanks.style.display = 'none';
                popUpCallback.style.display = 'none';
                popUpVisit.style.display = 'none';
                outputData();
            } else {
                target = target.closest('.form-wrapper');
                if (!target) {
                    popUpThanks.style.display = 'none';
                    popUpCallback.style.display = 'none';
                    popUpVisit.style.display = 'none';
                    outputData();
                }
            }

        });
    };

    ///Error Message
    const errorMessage = () => {
        popUpThanks.style.display = 'block';
        const errorTitle = popUpThanks.querySelector('.form-content > h4'),
            errorText = popUpThanks.querySelector('.form-content > p');
        errorTitle.textContent = 'Ошибка';
        errorText.innerHTML = `Что-то пошло не так...</br>Отправка не удалась. Попробуйте еще раз`;
        /*Close popUpThanks*/
        popUpThanks.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                popUpThanks.style.display = 'none';
                popUpCallback.style.display = 'none';
                popUpVisit.style.display = 'none';
                outputData();
            } else {
                target = target.closest('.form-wrapper');
                if (!target) {
                    popUpThanks.style.display = 'none';
                    popUpCallback.style.display = 'none';
                    popUpVisit.style.display = 'none';
                    outputData();
                }
            }

        });
    };

    //Check input by russian words
    let checkInputByRussianWords = document.querySelectorAll('[name="name"]');
    checkInputByRussianWords.forEach((elem) => {
        elem.addEventListener('input', function() {
            this.value = this.value.replace(/[^А-Яа-яЁё0-9 ]/, '');
        })
    });

    //Check input by number
    const checkInputByNumbers = document.querySelectorAll('[name="phone"]');
    checkInputByNumbers.forEach((elem) => {
        elem.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9\+]/, '');
        })
    });

    form.forEach((elem) => {
        //Навешиваем на форму обработчик событий submit
        elem.addEventListener('submit', (event) => {

            event.preventDefault(); //запрещаем перезагрузку страницы
            elem.appendChild(statusMessage); //помещаем на страницу statusMessage

            //перед отправкой данных нужно их получить с помощью FormData
            const formData = new FormData(elem); //получаем все данные из нашей формы
            /*Получаем объект с нашими данными*/
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            /*Отправляем и обрабатываем запрос на сервер*/
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        /*если статус не 200, то обрабатываем запрос как ошибку*/
                        throw new Error('status network not 200')
                    }
                    elem.removeChild(statusMessage);
                    successMessage();
                })
                .catch((error) => {
                    elem.removeChild(statusMessage);
                    errorMessage();
                    console.log(error);
                });
        });
    });

    /*Функция запроса на сервер*/
    const postData = (body) => {
        return fetch('server.php', {
            method: 'POST', //указывает POST-запрос, т.к. по умолчанию у fetch() идет метод GET
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }


};

export default sendForm;