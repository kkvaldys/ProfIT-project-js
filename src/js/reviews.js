import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Функция для получения данных отзывов с сервера
async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

// Функция для отображения отзывов в слайдере
async function showReviews() {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  try {
    const reviews = await fetchReviews();
    console.log(reviews);

    reviews.forEach(review => {
      const listItem = document.createElement('li');
      listItem.className = 'swiper-slide';
      listItem.innerHTML = `
        <div><img class="reviews-image" src="${review.avatar_url}" alt="${review.avatar_url}"></div>
        <h3 class="reviews-name">${review.author}</h3>
        <p class="reviews-text">${review.review}</p>
      `;
      swiperWrapper.appendChild(listItem);
    });

    // Инициализация Swiper
    const swiper = new Swiper('.swiper', {
      // Настройки Swiper
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        1: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        1440: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
      },
      keyboard: {
        enabled: true,
      },
      direction: 'horizontal',
      loop: false,
    });

    // Обработчик события изменения размера окна для обновления Swiper
    window.addEventListener('resize', function () {
      swiper.update();
    });
  } catch (error) {
    const errorNotFound = document.createElement('div');
    errorNotFound.innerHTML = `<p>Not found</p>`;
    swiperWrapper.appendChild(errorNotFound);
    const swiperButtonPrev = document.querySelector('.custom-button-prev');
    const swiperButtonNext = document.querySelector('.custom-button-next');
    swiperButtonPrev.style.display = 'none';
    swiperButtonNext.style.display = 'none';
    console.error(error.message);
  }
}
showReviews();

// ============================================================

// Функция для получения данных отзывов с сервера
// async function fetchReviews() {
//   try {
//     const response = await fetch(
//       'https://portfolio-js.b.goit.study/api/reviews'
//     );
//     if (!response.ok) {
//       throw new Error('Failed to fetch reviews');
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//     return error;
//   }
// }

// // Функция для отображения отзывов в слайдере
// async function showReviews() {
//   const swiperWrapper = document.querySelector('.swiper-wrapper');
//   try {
//     const reviews = await fetchReviews();
//     console.log(reviews);

//     reviews.forEach(review => {
//       const listItem = document.createElement('li');
//       listItem.className = 'swiper-slide';
//       listItem.innerHTML = `
//         <div><img class="reviews-image" src="${review.avatar_url}" alt="${review.avatar_url}"></div>
//         <h3 class="reviews-name">${review.author}</h3>
//         <p class="reviews-text">${review.review}</p>
//       `;
//       swiperWrapper.appendChild(listItem);
//     });

//     // Инициализация Swiper
//     const swiper = new Swiper('.swiper', {
//       // Настройки Swiper
//       slidesPerView: 1,
//       spaceBetween: 16,
//       loop: true,
//       breakpoints: {
//         768: {
//           slidesPerView: 2,
//         },
//         1440: {
//           slidesPerView: 4,
//         },
//       },
//       navigation: {
//         nextEl: '.custom-button-next',
//         prevEl: '.custom-button-prev',
//       },
//       keyboard: {
//         enabled: true,
//       },
//       direction: 'horizontal',
//       loop: false,
//     });
//   } catch (error) {
//     const errorNotFound = document.createElement('div');
//     errorNotFound.innerHTML = `<p>Not found</p>`;
//     swiperWrapper.appendChild(errorNotFound);
//     const swiperButtonPrev = document.querySelector('.custom-button-prev');
//     const swiperButtonNext = document.querySelector('.custom-button-next');
//     swiperButtonPrev.style.display = 'none';
//     swiperButtonNext.style.display = 'none';
//     console.error(error.message);
//   }
// }
// showReviews();

// =======================================================

// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
// // Функция для получения данных отзывов с сервера
// async function fetchReviews() {
//   try {
//     const response = await fetch(
//       'https://portfolio-js.b.goit.study/api/reviews'
//     );
//     if (!response.ok) {
//       throw new Error('Failed to fetch reviews');
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//     return error;
//   }
// }

// // Функция для отображения отзывов в слайдере
// async function showReviews() {
//   const swiperWrapper = document.querySelector('.swiper-wrapper');
//   try {
//     const reviews = await fetchReviews();
//     console.log(reviews);

//     reviews.forEach(review => {
//       const listItem = document.createElement('li');
//       listItem.className = 'swiper-slide';
//       listItem.innerHTML = `
//         <div><img class="reviews-image" src="${review.avatar_url}" alt="${review.avatar_url}"></div>
//         <h3 class="reviews-name">${review.author}</h3>
//         <p class="reviews-text">${review.review}</p>
//       `;
//       swiperWrapper.appendChild(listItem);
//     });

//     // Инициализация Swiper
//     const swiper = new Swiper('.swiper', {
//       // Настройки Swiper
//       slidesPerView: 1,
//       spaceBetween: 16,
//       loop: true,
//       breakpoints: {
//         768: {
//           slidesPerView: 2,
//         },
//         1440: {
//           slidesPerView: 4,
//         },
//       },
//       navigation: {
//         nextEl: '.custom-button-next',
//         prevEl: '.custom-button-prev',
//       },
//       keyboard: {
//         enabled: true,
//       },
//       direction: 'horizontal',
//       loop: false,
//     });
//   } catch (error) {
//     const errorNotFound = document.createElement('div');
//     errorNotFound.innerHTML = `<p>Not found</p>`;
//     swiperWrapper.appendChild(errorNotFound);
//     const swiperButtonPrev = document.querySelector('.custom-button-prev');
//     const swiperButtonNext = document.querySelector('.custom-button-next');
//     swiperButtonPrev.style.display = 'none';
//     swiperButtonNext.style.display = 'none';
//     console.error(error.message);
//   }
// }
// showReviews();

// ===============================================

//     throw new Error(error.message);

// Обработчики событий для проверки крайних позиций
// swiper.on('slideChange', function () {
//   checkButtonState(swiper);
// });

// Проверяем состояние кнопок при инициализации
// checkButtonState(swiper);

// Функция для проверки состояния кнопок
// function checkButtonState(swiper) {
//   const prevButton = document.querySelector('.swiper-button-prev');
//   const nextButton = document.querySelector('.swiper-button-next');

//   // Если текущий слайд находится на первой позиции
//   if (swiper.isBeginning) {
//     prevButton.setAttribute('disabled', 'true');
//   } else {
//     prevButton.removeAttribute('disabled');
//   }

//   // Если текущий слайд находится на последней позиции
//   if (swiper.isEnd) {
//     nextButton.setAttribute('disabled', 'true');
//   } else {
//     nextButton.removeAttribute('disabled');
//   }
// }

// Запускаем отображение отзывов
