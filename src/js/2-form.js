const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const input = form.elements.email;
const localStorageKey = "feedback-form-state";


const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
textarea.value = savedData.message || "";
input.value = savedData.email || "";

form.addEventListener("input", (evt) => {
  const value = {
    email: input.value.trim(),
    message: textarea.value.trim(),
  };

localStorage.setItem(localStorageKey, JSON.stringify(value));

});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (textarea.value.trim() !== '' && input.value.trim() !=='') {
    console.log({ Email: evt.target.elements.email.value.trim(), Message: evt.target.elements.message.value.trim() })
  };
  localStorage.removeItem(localStorageKey);
  form.reset();
});
