const mainSlider = () => {

    const slide = document.querySelectorAll('.main-slider > .slide');

    let currentSlide = 0;

    const autoPlaySlide = () => {
        slide[currentSlide].style.display = 'none';
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        slide[currentSlide].style.display = 'flex';
    };

    const startSlide = (time = 2000) => {
        setInterval(autoPlaySlide, time);
    };

    startSlide(2000);

};

export default mainSlider;