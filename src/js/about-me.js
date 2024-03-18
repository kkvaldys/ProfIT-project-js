import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

//  const btnNotActive = document.querySelector('.svg-btn.clicked');
const accordion = new Accordion('.about-accordion', {
    onOpen: (currElement) => {

        const btnActiv = currElement
            .querySelector('.svg-btn');
     
        btnActiv.classList.toggle('clicked')
    },
    onclose: (currElement) => {

        const btnActiv = currElement
            .querySelector('.svg-btn');
     
        btnActiv.classList.toggle('clicked')
    },
});
            


  

accordion.open(0);

new Swiper('.swiper', {
    navigation: {
     nextEl:".about-btn-left",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 6,
        },
    },
    spaceBetween: 0,
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown:true,
    },

    initialSlide: 0,
    
});






