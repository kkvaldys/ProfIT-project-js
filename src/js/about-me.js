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

// document.addEventListener('DOMContentLoaded', function () {
//   const mySwiper = new Swiper('.about-scroll', {
//     navigation: {
//       nextEl: '.about-btn-left',
//     },
//     centeredSlides: true,
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
//         slidesPerView: 5,
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


 const swiperSkills = document.querySelector('.about-skills-list');
const skills = ["HTML/CSS", "JavaScript", "React", "Node. js", "React Native", "Soft skills", "Java"];
// Функція для відображення skills в слайдері
function showSkills() {

  skills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.className = 'about-skills-item swiper-slide';
    listItem.innerHTML = `<p class="about-skills-text">${skill}</p>`;
    swiperSkills.appendChild(listItem);
  });

  const mySwiper = new Swiper('.about-scroll', {
    breakpoints: {
      375: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: '.about-btn-left',
    },
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      click: function () {
        if (this.isStart) {
          this.slideTo(0);
        }
      },
    },
   
  });
  // Ініціалізація Swiper
 
  console.log(mySwiper);
  let previousSlide = null;

  // const firstItem = document.querySelector('.about-skills-text');
  // firstItem.style.backgroundColor = '#ed3b44';
  const firstEl = document.querySelector('.about-skills-text:first-child');
  firstEl.style.backgroundColor = '#ed3b44';
  mySwiper.on('slideChange', function () {
    firstEl.style.backgroundColor = '';
    if (previousSlide) {
      previousSlide.style.backgroundColor = '';
    }
    const activeSlide = mySwiper.slides[mySwiper.activeIndex];
    activeSlide.style.backgroundColor = '#ed3b44';
    activeSlide.style.borderRadius = '50%';
    previousSlide = activeSlide;
    mySwiper.on('click', function () {
      if (previousSlide) {
        previousSlide.style.backgroundColor = '';
        previousSlide.style.borderRadius = '';
        previousSlide = null;
      }
    })
    
  });

  updateButton();

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      mySwiper.slidePrev();
    } else if (event.key === 'ArrowRight') {
      mySwiper.slideNext();
    }
  });

  function updateButton() {
    if (mySwiper.isBeginning) {
      disableButton(prevButton);
      enableButton(nextButton);
    } else if (mySwiper.isEnd) {
      enableButton(prevButton);
      disableButton(nextButton);
    }else {
      enableButton(prevButton);
      enableButton(nextButton);
    }
  }
}
showSkills();
