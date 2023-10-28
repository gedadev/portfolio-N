/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
export default class Contact {
  static formValidations(inputs) {
    inputs.forEach((input) => {
      input.input.addEventListener('input', () => {
        if (input.input.validity.valid) {
          input.errorMsg.style.display = 'none';
        } else {
          Contact.validateInput(input.input, input.errorMsg);
        }
      });
    });
  }

  static createContactSection() {
    const contactSection = document.createElement('section');
    const sectionTitle = document.createElement('h2');

    contactSection.id = 'contact';
    sectionTitle.className = 'contact-section-title';
    sectionTitle.innerText = 'Ready to collaborate?';

    contactSection.appendChild(sectionTitle);
    contactSection.appendChild(Contact.createForm());

    return contactSection;
  }

  static createForm() {
    const formContainer = document.createElement('div');
    const formEngageText = document.createElement('p');
    const contactForm = document.createElement('form');
    const submitFormButton = document.createElement('button');
    const formInputs = {
      name: {
        label: document.createElement('label'),
        input: document.createElement('input'),
        errorMsg: document.createElement('span'),
      },
      email: {
        label: document.createElement('label'),
        input: document.createElement('input'),
        errorMsg: document.createElement('span'),
      },
      message: {
        label: document.createElement('label'),
        input: document.createElement('textarea'),
        errorMsg: document.createElement('span'),
      },
    };

    formContainer.className = 'form-container';
    formEngageText.className = 'engage-msg';
    contactForm.id = 'contact-form';
    submitFormButton.className = 'submit-btn';
    formInputs.name.input.type = 'text';
    formInputs.name.input.placeholder = 'John Doe';
    formInputs.email.input.type = 'email';
    formInputs.email.input.placeholder = 'jdoe@domain.com';
    formInputs.message.input.placeholder = 'Start typing...';
    submitFormButton.type = 'submit';
    submitFormButton.innerHTML = 'Send <i class="fa-solid fa-share-from-square"></i>';
    submitFormButton.setAttribute('form', 'contact-form');
    formEngageText.innerText = 'Leave me a message, or you can reach me by my online channels';

    Object.entries(formInputs).forEach((formInput) => {
      const inputContainer = document.createElement('div');
      inputContainer.className = 'input-container';
      formInput[1].label.innerText = `Your ${formInput[0]}: (*)`;
      formInput[1].label.htmlFor = formInput[0];
      formInput[1].input.id = formInput[0];
      formInput[1].input.setAttribute('autocomplete', 'off');
      formInput[1].input.required = true;
      inputContainer.appendChild(formInput[1].label);
      inputContainer.appendChild(formInput[1].input);
      inputContainer.appendChild(formInput[1].errorMsg);
      contactForm.appendChild(inputContainer);
    });

    formContainer.appendChild(formEngageText);
    formContainer.appendChild(contactForm);
    formContainer.appendChild(submitFormButton);
    Contact.formValidations(Object.values(formInputs));

    return formContainer;
  }
}
