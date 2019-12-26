var form = document.querySelector('.modal-form')
var submitBtn = form.querySelector('.form-button')
var inputs = form.querySelectorAll('.form-input')

var generateError = function (text) {
  var error = document.createElement('span')
  error.className = 'error'
  error.style.color = '#b75d5d'
  error.innerHTML = text
  return error
}
var removeErrors = function () {
  var errors = form.querySelectorAll('.error')
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

}
var checkInput = function () {
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      var error = generateError('Поле должно быть заполнено')
      form[i].parentElement.insertBefore(error, inputs[i])
      inputs[i].classList.add('invalid')
      inputs[i].parentElement.firstElementChild.classList.add('required')
    } else if (inputs[i].name === 'email') {
      checkEmailMatch()
    } else if (inputs[i].name === 'tel') {
      checkPhoneMatch()
    }
  }
}
var checkEmailMatch = function () {
  var inputEmail = form.querySelector('.form-input_email')
  if (!inputEmail.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
    var error = generateError('Введите корректный E-mail')
    inputEmail.parentElement.insertBefore(error, inputEmail)
    inputEmail.classList.add('invalid')
    inputEmail.parentElement.firstElementChild.classList.add('required')
  } else {
    inputEmail.classList.remove('invalid')
    inputEmail.parentElement.firstElementChild.classList.remove('required')
  }
}
var checkPhoneMatch = function () {
  var inputPhone = form.querySelector('.form-input_phone')
  if (!inputPhone.value.match(/^(8)[0-9]{10}$/)) {
    var error = generateError('Введите корректный номер телефона')
    inputPhone.parentElement.insertBefore(error, inputPhone)
    inputPhone.classList.add('invalid')
    inputPhone.parentElement.firstElementChild.classList.add('required')
  } else {
    inputPhone.classList.remove('invalid')
    inputPhone.parentElement.firstElementChild.classList.remove('required')
  }
}

var validate = function () {
 
  for (var i = 0; i < inputs.length; i++) {
    removeErrors()
    checkInput()
    if (inputs[i].parentElement.firstElementChild.classList.contains('invalid') || inputs[i].value === '') {
      event.preventDefault();
    }
  }
}
form.addEventListener('submit', function (event) {
  validate()
})