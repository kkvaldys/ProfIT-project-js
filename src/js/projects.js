import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
    const colors = {
        active: {
            stroke: 'var( --text-color)',
            border: 'rgba(250, 250, 250, 0.5)'
        },
        inactive: {
            stroke: 'var(--span-clr)',
            border: 'rgba(250, 250, 250, 0.2)' 
        }
    };

    const prevButton = document.querySelector('.swiper-but-prev');
    const nextButton = document.querySelector('.swiper-but-next');

    prevButton.disabled = true;
    nextButton.disabled = false; 

    const projectsSwiper = new Swiper('.projects-container-swiper', {
        navigation: {
            nextEl: '.swiper-but-next',
            prevEl: '.swiper-but-prev',
        },
        keyboard: {
            enabled: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        nested: true, 

        effect: 'cube',
        cubeEffect: {
            // slideShadows: true,
            // shadow: true,
        },
    });

    updateButtonStates(); 

    projectsSwiper.on('slideChange', function () {
        updateButtonStates();

        if (projectsSwiper.isBeginning) {
            prevButton.style.borderColor = colors.inactive.border;
            prevButton.querySelector('svg').style.stroke = colors.inactive.stroke;
            nextButton.style.borderColor = colors.active.border;
            nextButton.querySelector('svg').style.stroke = colors.active.stroke;
        } else if (projectsSwiper.isEnd) {
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

    function updateButtonStates() {
        if (projectsSwiper.isBeginning) {
            disableButton(prevButton);
            enableButton(nextButton);
        } else if (projectsSwiper.isEnd) {
            disableButton(prevButton);
            disableButton(nextButton);
        } else {
            enableButton(prevButton);
            enableButton(nextButton);
        }
    }

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
});
