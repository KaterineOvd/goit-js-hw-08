import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

function onFormChange(event) {
  const formData = { email: email.value, message: message.value };
  const stringifyData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringifyData);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function onFormReset(event) {
  let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
}

form.addEventListener('input', throttle(onFormChange, 500));
form.addEventListener('submit', onFormSubmit);

onFormReset();