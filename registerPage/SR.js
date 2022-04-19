const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const coPassword = document.getElementById('Co-password')

form.addEventListener('click', checkAndWorking)

var errorInput = true

function checkAndWorking() {
    checkInput([username, email, password, coPassword])
    if (!validateEmail(email.value)) {
        showError(email, "Invalid Email")
    }
    else {
        showSuccess(email)
    }
    checkPassword(password, coPassword)
    checkInputLength(username, 4, 30)
}

function showError(input, message) {
    errorInput = true
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input) {
    errorInput = false
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkInput(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `Please Enter ${getInputCase(input)}`)
        }
        else {
            showSuccess(input)
        }
    })
}

function getInputCase(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkPassword(password1, password2) {
    if (password1.value !== password2.value) {
        showError(password2, "Please Check Your Co-Password")
    }
}

function checkInputLength(input, min, max) {
    if (input.value.length <= min) {
        showError(input, `${getInputCase(input)} more than ${min} letters`)
    }
    else if (input.value.length > max) {
        showError(input, `${getInputCase(input)} less than ${max} letters`)
    }
    else {
        showSuccess(input)
    }
}

function getErrorInput(){
    return errorInput
}

function resetAllInput(){
    username.value = ''
    email.value = ''
    password.value = ''
    coPassword.value = ''
}