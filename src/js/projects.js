import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const colors = {
    active: {
      stroke: '#fafafa',
      border: 'rgba(250, 250, 250, 0.5)',
    },
    inactive: {
      stroke: '#3B3B3B',
      border: 'rgba(250, 250, 250, 0.2)',
    },
  };

  const prevButton = document.querySelector('.swiper-but-prev');
  const nextButton = document.querySelector('.swiper-but-next');

  prevButton.disabled = true;
  nextButton.disabled = false;

  const swiper = new Swiper('.projects-container-swiper', {
    navigation: {
      nextEl: '.swiper-but-next',
      prevEl: '.swiper-but-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,

    effect: 'cube',
    cubeEffect: {
      // slideShadows: true,
      // shadow: true,
    },
  });

  swiper.on('slideChange', function () {
    swiper.updateSlides();
  });

  updateButtonStates();
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      swiper.slidePrev();
    } else if (event.key === 'ArrowRight') {
      swiper.slideNext();
    }
  });

  document.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
      swiper.slideNext();
    } else if (event.deltaY < 0) {
      swiper.slidePrev();
    }
  });

  function updateButtonStates() {
    if (swiper.isBeginning) {
      disableButton(prevButton);
      enableButton(nextButton);
    } else if (swiper.isEnd) {
      enableButton(prevButton);
      disableButton(nextButton);
    } else {
      enableButton(prevButton);
      enableButton(nextButton);
    }
  }

  // Задізейбл кнопку та змінити колір на неактивний
  function disableButton(button) {
    button.disabled = true;
    button.style.borderColor = colors.inactive.border;
    button.querySelector('svg').style.stroke = colors.inactive.stroke;
  }

  function enableButton(button) {
    button.disabled = false;
    button.style.borderColor = colors.active.border;
    button.querySelector('svg').style.stroke = colors.active.stroke;
  }

  swiper.on('slideChange', function () {
    updateButtonStates();

    if (swiper.isBeginning) {
      prevButton.style.borderColor = colors.inactive.border;
      prevButton.querySelector('svg').style.stroke = colors.inactive.stroke;
      nextButton.style.borderColor = colors.active.border;
      nextButton.querySelector('svg').style.stroke = colors.active.stroke;
    } else if (swiper.isEnd) {
      prevButton.style.borderColor = colors.active.border;
      prevButton.querySelector('svg').style.stroke = colors.active.stroke;
      nextButton.style.borderColor = colors.inactive.border;
      nextButton.querySelector('svg').style.stroke = colors.inactive.stroke;
    } else {
      prevButton.style.borderColor = colors.active.border;
      prevButton.querySelector('svg').style.stroke = colors.active.stroke;
      nextButton.style.borderColor = colors.active.border;
      nextButton.querySelector('svg').style.stroke = colors.active.stroke;
    }
  });
});
