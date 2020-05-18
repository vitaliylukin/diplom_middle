'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
/*import elementClosest from 'element-closest';
elementClosest(window);*/

import dropDownMenu from "./modules/dropDownMenu";
import freeVisitForm from "./modules/freeVisitForm";
import callbackForm from "./modules/callbackForm";
import gift from "./modules/gift";
import mainSlider from "./modules/mainSlider";
import gallerySlider from "./modules/gallerySlider";
import toggleMenu from "./modules/toggleMenu";
import sendForm from "./modules/sendForm";
import calc from "./modules/calc";
import bottomScroll from "./modules/bottomScroll";


import SliderCarousel from "./modules/sliderCarousel";


//Drop-down Menu
dropDownMenu();
//Free Visit Form
freeVisitForm();
//Callback Form
callbackForm();
//Modal Gift
gift();
//Main Slider
mainSlider();
//Gallery Slider
gallerySlider();
//Toggle Menu
toggleMenu();
//Send Form
sendForm();
//Calculator
calc();
//Bottom Scroll
bottomScroll();




//Slider Carousel
const carousel = new SliderCarousel({
    main: '#services .wrapper',
    wrap: '.services-slider',
    slidesToShow: 5,
    infinity: true,
    responsive: [
        {
            breakpoint: 1240,
            slidesToShow: 4
        },
        {
            breakpoint: 1024,
            slidesToShow: 3
        },
        {
            breakpoint: 768,
            slidesToShow: 2
        },
        {
            breakpoint: 576,
            slidesToShow: 1
        }
    ]
});

carousel.init();



