const coversSection = document.querySelector('.covers-section');

// Функція, що перевіряє, чи елемент знаходиться в області видимості
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log(rect);
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функція, що виконує анімацію, якщо секція "Covers" знаходиться в області видимості
function animateIfInViewport() {
    
    if (isInViewport(coversSection)) {
        const elementsToAnimate = coversSection.querySelectorAll('.covers-line');
        // Додаємо властивість анімації до кожного елемента
        elementsToAnimate.forEach(element => {
            element.style.animationName = 'coversLine';
        });
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
