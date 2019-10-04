function CustomValidation(input) {
  this.invalidities = [];
  this.validityChecks = [];
  this.inputNode = input;
  this.registerListener();
}

CustomValidation.prototype = {
  addInvalidity: function (message) {
    this.invalidities.push(message);
  },
  getInvalidities: function () {
    return this.invalidities.join('. \n');
  },
  checkValidity: function (input) {
    for (var i = 0; i < this.validityChecks.length; i++) {

      var isInvalid = this.validityChecks[i].isInvalid(input);
      if (isInvalid) {
        this.addInvalidity(this.validityChecks[i].invalidityMessage);
      }

      var requirementElement = this.validityChecks[i].element;
      var errorElement = this.validityChecks[i].element.previousSibling;

      if (requirementElement) {
        if (isInvalid) {
          requirementElement.classList.add('invalid');
          requirementElement.classList.remove('valid');
          errorElement.innerText = this.invalidities[0];
        } else {
          requirementElement.classList.remove('invalid');
          requirementElement.classList.add('valid');
          errorElement.innerText = '';
        }
      }
      // end if requirementElement
    } // end for
  },
  checkInput: function () {

    this.inputNode.CustomValidation.invalidities = [];
    this.checkValidity(this.inputNode);

    if (this.inputNode.CustomValidation.invalidities.length === 0 && this.inputNode.value !== '') {
      this.inputNode.setCustomValidity('');
    } else {
      var message = this.inputNode.CustomValidation.getInvalidities();
      this.inputNode.setCustomValidity(message);
    }
  },
  registerListener: function () {

    var CustomValidation = this;

    this.inputNode.addEventListener('keyup', function () {
      CustomValidation.checkInput();
    });


  }

};


var phoneValidityChecks = [
  {
    isInvalid: function (input) {
      return input.value === "";
    },
    invalidityMessage: 'Поле должно быть заполнено',
    element: document.querySelector('.form-input_phone')

  },

  {
    isInvalid: function (input) {
      var illegalCharacters = input.value.match(/^(8)[0-9]{10}$/);
      return illegalCharacters ? false : true;
    },
    invalidityMessage: 'Введите корректный номер',
    element: document.querySelector('.form-input_phone')
  }
];

var emailValidityChecks = [
  {
    isInvalid: function (input) {
      return input.value === "";
    },
    invalidityMessage: 'Поле должно быть заполнено',
    element: document.querySelector('.form-input_email')
  },
  {
    isInvalid: function (input) {
      var illegalCharacters = input.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/);
      return illegalCharacters ? false : true;
    },
    invalidityMessage: 'Введите корректный E-mail',
    element: document.querySelector('.form-input_email')
  }
];

var phoneInput = document.querySelector('.form-input_phone');
var emailInput = document.querySelector('.form-input_email');

phoneInput.CustomValidation = new CustomValidation(phoneInput);
phoneInput.CustomValidation.validityChecks = phoneValidityChecks;

emailInput.CustomValidation = new CustomValidation(emailInput);
emailInput.CustomValidation.validityChecks = emailValidityChecks;

/* ----------------------------

Event Listeners

---------------------------- */

var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('button[type="submit"');


var form = document.querySelector('modal-form');

function validate() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].CustomValidation.checkInput();
    if (inputs[i].classList.contains('invalid') || inputs[i].value ==='') {
      event.preventDefault();
    }
  }
}
document.addEventListener('submit', validate);
