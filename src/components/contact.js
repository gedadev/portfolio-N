/* eslint-disable no-param-reassign */

export default class Contact {
  static formValidations(inputs, submitBtn) {
    inputs.forEach((input) => {
      input.input.addEventListener('input', () => {
        if (input.input.validity.valid) {
          input.errorMsg.style.display = 'none';
        } else {
          Contact.validateInput(input.input, input.errorMsg);
        }
        submitBtn.disabled = !Contact.enableButton(inputs);
      });
    });
  }

  static validateInput(input, errorMsg) {
    if (input.validity.valueMissing) {
      errorMsg.innerText = 'You must fill this field to continue';
      errorMsg.style.display = 'inline';
    }
  }

  static enableButton(inputs) {
    for (let i = 0; i < inputs.length; i += 1) {
      if (!inputs[i].input.validity.valid) return false;
    }
    return true;
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
    const externalComposeButton = document.createElement('button');
    const copyEmailButton = document.createElement('button');
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
    formEngageText.innerText = 'Leave me a message, and we can talk:';

    contactForm.id = 'contact-form';
    contactForm.noValidate = true;

    formInputs.name.input.type = 'text';
    formInputs.name.input.placeholder = 'John Doe';
    formInputs.email.input.type = 'email';
    formInputs.email.input.placeholder = 'jdoe@domain.com';
    formInputs.message.input.placeholder = 'Start typing...';

    submitFormButton.className = 'button submit-btn';
    submitFormButton.type = 'submit';
    submitFormButton.innerHTML = 'Send <i class="fa-solid fa-share-from-square"></i>';
    submitFormButton.setAttribute('form', 'contact-form');
    submitFormButton.disabled = true;

    externalComposeButton.innerHTML = 'Compose on your app <i class="fa-solid fa-pen-to-square"></i>';
    externalComposeButton.className = 'button external-btn';
    externalComposeButton.addEventListener('click', () => {
      window.location.href = 'mailto:gedaias@geda.dev?subject=Contact from geda.dev';
    });

    copyEmailButton.innerHTML = 'Copy email to clipboard <i class="fa-solid fa-copy"></i>';
    copyEmailButton.className = 'button copy-btn';
    copyEmailButton.addEventListener('click', () => {
      navigator.clipboard.writeText('gedaias@geda.dev');
      copyEmailButton.innerHTML = 'Email copied successfully <i class="fa-solid fa-check"></i>';
    });

    Object.entries(formInputs).forEach((formInput) => {
      const [inputName, inputProps] = formInput;
      const inputContainer = document.createElement('div');
      inputContainer.className = 'input-container';
      inputProps.label.innerText = `Your ${inputName}: (*)`;
      inputProps.label.htmlFor = inputName;
      inputProps.input.id = inputName;
      inputProps.input.setAttribute('autocomplete', 'off');
      inputProps.input.required = true;
      inputContainer.appendChild(inputProps.label);
      inputContainer.appendChild(inputProps.input);
      inputContainer.appendChild(inputProps.errorMsg);
      contactForm.appendChild(inputContainer);
    });

    formContainer.appendChild(formEngageText);
    formContainer.appendChild(contactForm);
    formContainer.appendChild(submitFormButton);
    formContainer.appendChild(externalComposeButton);
    formContainer.appendChild(copyEmailButton);
    Contact.formValidations(Object.values(formInputs), submitFormButton);

    return formContainer;
  }
}
