const gallerySlider = () => {

    const slider =  document.querySelector('.gallery-slider'),
        slide = slider.querySelectorAll('.slide');

    //Create dots list
    const tabDots = document.createElement('ul');
    tabDots.classList.add('slider-dots');
    slider.appendChild(tabDots);

    //Create dots
    let dot;

    for (let i = 0; i < slide.length; i++) {
        let newDot = document.createElement('li');
        newDot.classList.add('dot');
        tabDots.appendChild(newDot);
        if (i === 0) {
            newDot.classList.add('active');
        }
    }

    dot = document.querySelectorAll('.dot');

    //Create prev arrow
    const arrowPrev = document.createElement('div');
    const spanPrev =  document.createElement('span');
    spanPrev.textContent = '<';
    arrowPrev.classList.add('slider-arrow');
    arrowPrev.classList.add('prev');
    slider.appendChild(arrowPrev);
    arrowPrev.appendChild(spanPrev);

    //Create next arrow
    const arrowNext = document.createElement('div');
    const spanNext=  document.createElement('span');
    spanNext.textContent = '>';
    arrowNext.classList.add('slider-arrow');
    arrowNext.classList.add('next');
    slider.appendChild(arrowNext);
    arrowNext.appendChild(spanNext);

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'active');

        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'active');

    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.slider-arrow span, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'active');

        if (target.matches('.slider-arrow.next span')) {
            currentSlide++;
        } else if (target.matches('.slider-arrow.prev span')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'active');

    });
    slider.addEventListener('mouseover',(event) => {
        let target = event.target;
        if (target.matches('.slider-arrow span') || target.matches('.dot')) {
            stopSlide();
        }
    });

    //Убрать мышку со стрелки или точки
    slider.addEventListener('mouseout',(event) => {
        let target = event.target;
        if (target.matches('.slider-arrow span') || target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide(3000);

};

export default gallerySlider;








