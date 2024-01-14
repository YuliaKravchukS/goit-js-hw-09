const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const input = form.elements.email;
const localStorageKey = "feedback-form-state";


const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
textarea.value = savedData.textarea || "";
input.value = savedData.input || "";

form.addEventListener("input", (evt) => {
  const value = {
    input: input.value,
    textarea: textarea.value,
  };

localStorage.setItem(localStorageKey, JSON.stringify(value));

const savedSettings = localStorage.getItem(localStorageKey);

const parsedSettings = JSON.parse(savedSettings);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("Email:", evt.target.elements.email.value);
  console.log("Message:", evt.target.elements.message.value);

  localStorage.removeItem(localStorageKey);
  form.reset();
});
