// Form check

const emailInput = document.querySelector('input[name="email"]');
const commentsInput = document.querySelector('input[name="comments"]');


function emailCheck() {
    if (!emailInput.checkValidity() || emailInput.value === "") {
        emailInput.parentElement.classList.add('invalid');
        emailInput.parentElement.classList.remove('succes');
    }
    else {
        emailInput.parentElement.classList.remove('invalid');
        emailInput.parentElement.classList.add('succes');
    }
}

emailInput.addEventListener('focus', () => {
    if (!emailInput.classList.contains('invalid') && !emailInput.classList.contains('succes') ) {
        emailInput.parentElement.classList.add('active')  
    }
 });
emailInput.addEventListener('blur', () => emailInput.parentElement.classList.remove('active'));

emailInput.addEventListener('mouseenter', () => { 
    if (!emailInput.classList.contains('invalid') && !emailInput.classList.contains('succes')) {
        emailInput.parentElement.classList.add('active')  
    }
 });
emailInput.addEventListener('mouseleave', () => emailInput.parentElement.classList.remove('active'));

commentsInput.addEventListener('focus', () => commentsInput.parentElement.classList.add('active'));
commentsInput.addEventListener('blur', () => commentsInput.parentElement.classList.remove('active'));

commentsInput.addEventListener('mouseenter', () => commentsInput.parentElement.classList.add('active'));
commentsInput.addEventListener('mouseleave', () => commentsInput.parentElement.classList.remove('active'));

emailInput.addEventListener('input', emailCheck);

// Form check


