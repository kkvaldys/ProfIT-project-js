import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Функція для отримання данних з сервера
async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

// Функція для відображення відгуків в слайдері
async function showReviews() {
  const swiperWrapper = document.querySelector('.swiper-wrapper-reviews');
  try {
    const reviews = await fetchReviews();

    reviews.forEach(review => {
      const listItem = document.createElement('li');
      listItem.className = 'swiper-slide swiper-slide-reviews';
      listItem.innerHTML = `
        <div><img class="reviews-image" src="${review.avatar_url}" alt="${review.avatar_url}"></div>
        <h3 class="reviews-name">${review.author}</h3>
        <p class="reviews-text">${review.review}</p>
      `;
      swiperWrapper.appendChild(listItem);
    });

    // Ініціалізація Swiper
    const swiper = new Swiper('.swiper-reviews', {
      // Налаштування Swiper
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
      breakpoints: {
        // when window width is >= 320px
        1: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        // when window width is >= 640px
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next-reviews',
        prevEl: '.swiper-button-prev-reviews',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      direction: 'horizontal',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Sorry, no reviews found. Please, try again!`,
      maxWidth: 300,
      progressBar: true,
      progressBarEasing: false,
      position: 'bottomRight',
      color: '#1c1d20',
      backgroundColor: '#ed3b44',
    });
    const errorNotFound = document.createElement('div');
    errorNotFound.innerHTML = `<p class="error-message-reviews">Not found</p>`;
    swiperWrapper.appendChild(errorNotFound);
    const swiperButtonPrev = document.querySelector(
      '.swiper-button-prev-reviews'
    );
    const swiperButtonNext = document.querySelector(
      '.swiper-button-next-reviews'
    );
    swiperButtonPrev.style.display = 'none';
    swiperButtonNext.style.display = 'none';
    console.error(error.message);
  }
}
showReviews();
