const gallerySlider = () => {

    const slider =  document.querySelector('.gallery-slider'),
        slide = slider.querySelectorAll('.slide'),
        dot = slider.querySelectorAll('.dot');

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

        if (target.matches('#arrow-right span')) {
            currentSlide++;
        } else if (target.matches('#arrow-left span')) {
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








