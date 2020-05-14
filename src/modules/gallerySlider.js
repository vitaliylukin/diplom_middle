const gallerySlider = () => {

    const slider =  document.querySelector('.gallery-slider'),
        slide = slider.querySelectorAll('.slide'),
        btn = slider.querySelectorAll('.gallery-slider > .slider-arrow'),
        dot = slider.querySelectorAll('.dot');

    let currentSlide = 0;

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

    const startSlide = (time) => {
        setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {

    };

    slider.addEventListener('click', (event) => {



    });

    startSlide(150000);

};

export default gallerySlider;








