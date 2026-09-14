import { pristine } from './validate.js';

const form = document.querySelector('.img-upload__form');

const onFormSubmit = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

form.addEventListener('submit', onFormSubmit);
