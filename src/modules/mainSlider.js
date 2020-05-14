const mainSlider = () => {

    const slider =  document.querySelector('.main-slider'),
        slide = document.querySelectorAll('.main-slider > .slide');

    let currentSlide = 0,
        interval;

    const autoPlaySlide = () => {
        slide[currentSlide].style.display = 'none';
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        slide[currentSlide].style.display = 'flex';
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    //Наведение мышки на стрелку или точку
    slider.addEventListener('mouseover',() => {
        stopSlide();
    });

    //Убрать мышку со стрелки или точки
    slider.addEventListener('mouseout',() => {
        startSlide();
    });

    startSlide(3000);

};

export default mainSlider;