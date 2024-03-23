import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// Form check

const emailInput = document.querySelector('input[name="email"]');
const commentsInput = document.querySelector('input[name="comments"]');
let emailHoverCheck = 0;
let commentHoverCheck = 0;

function emailCheck() {
  if (!emailInput.checkValidity()) {
    emailInput.parentElement.classList.add('invalid');
    emailInput.parentElement.classList.remove('succes');
  } else {
    emailInput.parentElement.classList.remove('invalid');
    emailInput.parentElement.classList.add('succes');
  }
  if (emailInput.value === '') {
    emailInput.parentElement.classList.remove('invalid');
    emailInput.parentElement.classList.remove('succes');
  }
}

emailInput.addEventListener('focus', () => {
  emailInput.parentElement.classList.add('active');
  emailHoverCheck = 1;
});
emailInput.addEventListener('blur', () => {
  emailInput.parentElement.classList.remove('active');
  emailHoverCheck = 0;
});

emailInput.addEventListener('mouseenter', () =>
  emailInput.parentElement.classList.add('active')
);
emailInput.addEventListener('mouseleave', () => {
  if (emailHoverCheck === 0) {
    emailInput.parentElement.classList.remove('active');
  }
});

commentsInput.addEventListener('focus', () => {
  commentsInput.parentElement.classList.add('active');
  commentHoverCheck = 1;
});
commentsInput.addEventListener('blur', () => {
  commentsInput.parentElement.classList.remove('active');
  commentHoverCheck = 0;
});

commentsInput.addEventListener('mouseenter', () =>
  commentsInput.parentElement.classList.add('active')
);
commentsInput.addEventListener('mouseleave', () => {
  if (commentHoverCheck === 0) {
    commentsInput.parentElement.classList.remove('active');
  }
});

emailInput.addEventListener('input', emailCheck);

// Form check

// Form send
import axios from 'axios';
const formButton = document.querySelector('.footer-form-button');
const backdrop = document.querySelector('.modal-backdrop');
formButton.addEventListener('click', postData);

async function postData(event) {
  event.preventDefault();
  const data = {
    email: emailInput.value,
    comment: commentsInput.value,
  };

  if (emailInput.checkValidity()) {
    axios
      .post('https://portfolio-js.b.goit.study/api-docs', data)
      .then(response => {
        backdrop.classList.remove('visually-hidden');
      })
      .catch(error => {
        alert(error);
      });
    emailInput.value = '';
    commentsInput.value = '';
    emailInput.parentElement.classList.remove('succes');
  } else {
      iziToast.error({
      title: 'Error',
      message: `Invalid data, try again!`,
      maxWidth: 300,
      progressBar: true,
      progressBarEasing: false,
      position: 'bottomRight',
      color: '#1c1d20',
      backgroundColor: '#ed3b44',
    });
  }
}

// Modal close

const modalButton = document.querySelector('.modal-button');

modalButton.addEventListener('click', () =>
  backdrop.classList.add('visually-hidden')
);
backdrop.addEventListener('click', () => {
  if (event.target === backdrop) {
    backdrop.classList.add('visually-hidden');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    backdrop.classList.add('visually-hidden');
  }
});
