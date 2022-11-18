import throttle from 'lodash.throttle';

const contactFormRef = document.querySelector('.feedback-form');
const userData = {};
const KEY = 'feedback-form-state';

// заповнення полів при оновленні
function fillContactFormRef() {
    const userDataLS = JSON.parse(localStorage.getItem(KEY));

    for (const value in userDataLS) {
        if (userDataLS.hasOwnProperty(value)) {
            contactFormRef.elements[value].value = userDataLS[value];
        }
    }
}

fillContactFormRef();

// збережння в ЛС при інпуті
function onContactFormRefInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    userData[name] = value;

    localStorage.setItem(KEY, JSON.stringify(userData));
    // console.log(userData);
}

// очистка ЛС при сабміті
function onContactFormRefSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(KEY);

    console.log(userData);
}


contactFormRef.addEventListener('input', throttle(onContactFormRefInput, 500));
contactFormRef.addEventListener('submit', onContactFormRefSubmit)
