import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-accordion', {
  onOpen: currElement => {
    const btnActiv = currElement.querySelector('.svg-btn');

    btnActiv.classList.toggle('clicked');
  },
  onclose: currElement => {
    const btnActiv = currElement.querySelector('.svg-btn');

    btnActiv.classList.toggle('clicked');
  },
});
