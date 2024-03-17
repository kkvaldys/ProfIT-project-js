const modalBtn = document.querySelector('.mobile-open-btn');

let sidebar = document.querySelector('.mobile-menu');

modalBtn.addEventListener('click', () => {

    sidebar.classList.add('is-open');
}
)

const closeModalBtn = document.querySelector('.mobile-close-btn');

closeModalBtn.addEventListener('click', () => {

    sidebar.classList.remove('is-open');
}
)