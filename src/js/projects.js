
// import Swiper from 'swiper';
// // import { Navigation, Pagination } from 'swiper/modules';
// // import 'swiper/css';
// import 'swiper/css/navigation';
// // import 'swiper/css/pagination';




import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-but-next',
            prevEl: '.swiper-but-prev',
        },

        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //     dynamicBullets: true,
        //     rendeBullet: function (index, className) {
        //         return '<span class="' + className + '">' + (index + 1) + '</span>';
        //     },
        // },
        
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     draggable: true
        // },
        // simulateTouch: true,
        // touchRatio: 1,
        // touchAngle: 45,
        // grabCursor: true,

        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        mousewheel: {
            sensitivity: 1,
            // eventsTarget: ".swiper"
        },

        // autoHeight: true,
        // Відступи між картинками
        spaceBetween: 30,

        freeMode: true,

        speed: 300,

        effect: 'cube',

        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            sadowScale: 0.94
        },



    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     const swiperContainer = document.querySelector('.projects-container-swiper');
//     if (swiperContainer) {
//         const swiper = new Swiper(swiperContainer, {
//             slidesPerView: 1,
//             spaceBetween: 30,
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             keyboard: {
//                 enabled: true,
//             },
//             mousewheel: {
//                 enabled: true,
//             },
//             on: {
//                 init: function () {
//                     // Приховати кнопку "Наступний" при запуску слайдера
//                     const nextButton = document.querySelector('.swiper-button-next');
//                     if (nextButton) {
//                         nextButton.disabled = true;
//                     }
//                 },
//                 reachEnd: function () {
//                     // Досягнуто кінця списку елементів
//                     const nextButton = document.querySelector('.swiper-button-next');
//                     if (nextButton) {
//                         nextButton.disabled = true;
//                     }
//                 },
//                 reachBeginning: function () {
//                     // Досягнуто початку списку елементів
//                     const prevButton = document.querySelector('.swiper-button-prev');
//                     if (prevButton) {
//                         prevButton.disabled = true;
//                     }
//                 },
//                 fromEdge: function () {
//                     // Відсунулися від краю списку елементів
//                     const prevButton = document.querySelector('.swiper-button-prev');
//                     const nextButton = document.querySelector('.swiper-button-next');
//                     if (prevButton) {
//                         prevButton.disabled = false;
//                     }
//                     if (nextButton) {
//                         nextButton.disabled = false;
//                     }
//                 }
//             }
//         });
//     }
// });
