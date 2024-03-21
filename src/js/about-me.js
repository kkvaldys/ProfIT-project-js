// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';

// const accordion = new Accordion('.about-accordion', {
//   onOpen: currElement => {
//     const btnActiv = currElement.querySelector('.svg-btn');

//     btnActiv.classList.toggle('clicked');
//   },
//   onclose: currElement => {
//     const btnActiv = currElement.querySelector('.svg-btn');

//     btnActiv.classList.toggle('clicked');
//   },
// });
// accordion.open(0);

// document.addEventListener('DOMContentLoaded', function () {
//   const mySwiper = new Swiper('.about-scroll', {
//     navigation: {
//       nextEl: '.about-btn-left',
//     },
//     loop: true,

//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },

//     breakpoints: {
//       375: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       1440: {
//         slidesPerView: 6,
//         spaceBetween: 0,
//       },
//     },
//     on: {
//       click: function () {
//         if (this.isEnd) {
//           this.slideTo(0);
//         }
//       },
//     },
//   });
//   let previousSlide = null;

//   mySwiper.on('slideChange', function () {
//     if (previousSlide) {
//       previousSlide.style.backgroundColor = '';
//     }

//     const activeSlide = mySwiper.slides[mySwiper.activeIndex];

//     activeSlide.style.backgroundColor = '#ed3b44';
//     activeSlide.style.borderRadius = '50%';
//     previousSlide = activeSlide;
//   });
// });

// ==============================

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const accordion = new Accordion('.about-accordion', {
  onOpen: currElement => {
    const btnActiv = currElement.querySelector('.svg-btn');

    btnActiv.classList.toggle('clicked');
  },
  onclose: currElement => {
    const btnActiv = currElement.querySelector('.svg-btn');

    btnActiv.classList.toggle('clicked');
  },
  showMultiple: true,
});
accordion.open(0);

document.addEventListener('DOMContentLoaded', function () {
  const mySwiper = new Swiper('.about-scroll', {
    navigation: {
      nextEl: '.about-btn-left',
    },
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      375: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
      },
    },
    on: {
      click: function () {
        if (this.isEnd) {
          this.slideTo(0);
        }
      },
    },
  });

  let previousSlide = null;

  mySwiper.on('slideChange', function () {
    if (previousSlide) {
      previousSlide.style.backgroundColor = '';
    }

    const activeSlide = mySwiper.slides[mySwiper.activeIndex];

    activeSlide.style.backgroundColor = '#ed3b44';
    activeSlide.style.borderRadius = '50%';
    previousSlide = activeSlide;
  });
});
