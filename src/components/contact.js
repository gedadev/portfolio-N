/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
export default function createContact() {
  const contactSection = document.createElement('section');
  const sectionTitle = document.createElement('h2');
  const formContainer = document.createElement('div');
  const formEngageText = document.createElement('p');
  const contactForm = document.createElement('form');
  const submitFormButton = document.createElement('button');
  const formInputs = {
    name: {
      label: document.createElement('label'),
      input: document.createElement('input'),
    },
    email: {
      label: document.createElement('label'),
      input: document.createElement('input'),
    },
    message: {
      label: document.createElement('label'),
      input: document.createElement('textarea'),
    },
  };

  contactSection.id = 'Contact';
  sectionTitle.className = 'contact-section-title';
  formContainer.className = 'form-container';
  formEngageText.className = 'engage-msg';
  contactForm.id = 'contact-form';
  submitFormButton.className = 'submit-btn';

  formInputs.name.input.type = 'text';
  formInputs.email.input.type = 'email';
  submitFormButton.type = 'submit';
  submitFormButton.innerHTML = 'Send <i class="fa-solid fa-share-from-square"></i>';
  submitFormButton.setAttribute('form', 'contact-form');

  sectionTitle.innerText = 'Ready to collaborate?';
  formEngageText.innerText = 'Leave me a message, or you can reach me by my online networks in the sidebar';

  Object.entries(formInputs).forEach((formInput) => {
    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    formInput[1].label.innerText = `Your ${formInput[0][0].toUpperCase().concat(formInput[0].slice(1))}: `;
    formInput[1].label.htmlFor = formInput[0];
    formInput[1].input.id = formInput[0];
    formInput[1].input.setAttribute('autocomplete', 'off');
    formInput[1].input.required = true;
    inputContainer.appendChild(formInput[1].label);
    inputContainer.appendChild(formInput[1].input);
    contactForm.appendChild(inputContainer);
  });
  formContainer.appendChild(formEngageText);
  formContainer.appendChild(contactForm);
  formContainer.appendChild(submitFormButton);

  contactSection.appendChild(sectionTitle);
  contactSection.appendChild(formContainer);

  return contactSection;
}
