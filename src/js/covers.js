// Функція, що перевіряє, чи елемент знаходиться в області видимості
const coversSection = document.querySelector('.covers-section');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Перевіряємо, чи знаходиться верхній і нижній краї прямокутника всередині видимої області
    // і чи знаходяться лівий і правий краї всередині видимої області
    return (
        rect.top >= 0 &&
        rect.bottom <= windowHeight &&
        rect.left >= 0 &&
        rect.right <= windowWidth
    );
}

// Функція, що виконує анімацію, якщо секція "Covers" знаходиться в області видимості
function animateIfInViewport() {
    
    if (isInViewport(coversSection)) {
        // Знаходимо всі елементи, які потрібно анімувати
        const elementsToAnimate = coversSection.querySelectorAll('.animate');
        // Додаємо клас анімації до кожного елемента
        for (let i = 0; i < elementsToAnimate.length; i++) {
            const element = elementsToAnimate[i];
            element.classList.add('animate');
        }
    }
}

// Спрацьовує при прокрутці сторінки або зміні розміру вікна
window.addEventListener('scroll', function() {
    if (isInViewport(coversSection)) {
        animateIfInViewport();
    }
});
window.addEventListener('resize', function() {
    if (isInViewport(coversSection)) {
        animateIfInViewport();
    }
});

// Спрацьовує при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    if (isInViewport(coversSection)) {
        animateIfInViewport();
    }
});
