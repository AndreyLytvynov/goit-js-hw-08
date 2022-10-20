import throttle from 'lodash.throttle';

const formEL = document.querySelector('.feedback-form');
const inputEl = document.querySelector('[name="email"]');
const textAreaEl = document.querySelector('[name="message"]');

addChangeValueFromLocalStorage();
function addChangeValueFromLocalStorage() {
  const dateFromStorage = localStorage.getItem('feedbackFormState');
  const objDataFromStorage = JSON.parse(dateFromStorage);
  if (!dateFromStorage) {
    return;
  }
  //   console.log(objDataFromStorage);
  inputEl.value = objDataFromStorage.email;
  textAreaEl.value = objDataFromStorage.message;
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(createObjData(e));
  localStorage.clear('feedbackFormState');
  e.target.reset();
}

function onInputChange(e) {
  const feedbackFormState = createObjData(e);
  localStorage.setItem('feedbackFormState', JSON.stringify(feedbackFormState));
}

function createObjData(e) {
  const objData = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    objData[key] = value;
  });
  return objData;
}

formEL.addEventListener('submit', onSubmitForm);
formEL.addEventListener('input', onInputChange);
