const formElem = document.querySelector('.feedback-form');
const savedFormData = localStorage.getItem('feedback-form-state');

if (savedFormData) {
  try {
    setFormElemValues(JSON.parse(savedFormData));
  } catch {
    console.log('Could not load data from storage.');
  }
}
const formData = {
  email: formElem.email.value,
  message: formElem.message.value,
};

formElem.addEventListener('input', e => {
  saveFormData(e);
});

formElem.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email.length > 0 && formData.message.length > 0) {
    console.log(formData);
    clearTempData();
  } else {
    alert('Fill please all fields');
  }
});

function setFormElemValues({ email, message }) {
  formElem.email.value = email;
  formElem.message.value = message;
}

function saveFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function clearTempData() {
  localStorage.removeItem('feedback-form-state');
  formElem.reset();
}
