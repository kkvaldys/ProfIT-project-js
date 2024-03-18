import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';

const accordion = new Accordion('.about-accordion', {
    onOpen: (currElement) => {
        const btnActiv = currElement.querySelector('.svg-btn');
        const btnNotActive = document.querySelector('.svg-btn.clicked');

        if (currElement !== document.querySelector('.is-active')) {
            currElement = btnActiv;
        } else {
            currElement = btnNotActive;
        }
    }
});
            
        
    

  

accordion.open(0);

new Swiper('.swiper', {
    direction: 'horizontal',
    navigation: {

      nextEl:'.swiper-button-next',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 6,
        },
    },
    
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown:true,
    },
    initialSlide: 0,
});
;
const swiperEl = document.querySelector('.about-skills-list');
  const buttonEl = document.querySelector('.swiper-button-next');

  buttonEl.addEventListener('click', () => {
    swiperEl.swiper.slideNext();
  });