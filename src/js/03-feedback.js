import throttle from 'lodash.throttle';

const formEL = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('[name="email"]');
// const textAreaEl = document.querySelector('[name="message"]');

const LS_KEY_FEEDBACK = 'feedbackFormState';

(function acceptChangesFromLocalStorage() {
  const dateFromStorage = localStorage.getItem(LS_KEY_FEEDBACK);

  if (!dateFromStorage) {
    return;
  }

  const objDataFromStorage = JSON.parse(dateFromStorage);
  if (!Object.values(objDataFromStorage).length) {
    return;
  }

  for (const key in objDataFromStorage) {
    if (objDataFromStorage.hasOwnProperty(key)) {
      formEL.elements[key].value = objDataFromStorage[key];
    }
  }
})();

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(createObjData(e));
  localStorage.removeItem(LS_KEY_FEEDBACK);
  e.target.reset();
}

function handleInputChange(e) {
  const feedbackFormState = createObjData(e);
  localStorage.setItem(LS_KEY_FEEDBACK, JSON.stringify(feedbackFormState));
}

function createObjData(e) {
  const objData = {};
  // const formData = new FormData(e.currentTarget);/// throttle не работает с e.currentTarget
  const formData = new FormData(formEL);
  formData.forEach((value, key) => {
    objData[key] = value;
  });
  return objData;
}

formEL.addEventListener('submit', handleFormSubmit);
formEL.addEventListener('input', throttle(handleInputChange, 250));
