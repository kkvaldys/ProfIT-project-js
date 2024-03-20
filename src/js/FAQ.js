import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-accordion', {
  duration: 400,
  showMultiple: false,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});
