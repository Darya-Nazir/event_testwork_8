"use strict";
window.onload = function () {

    const fullName = document.getElementById('full-name');
    const username = document.getElementById('your-username');
    const checkbox = document.getElementById('checkbox');
    const passwordInput = document.querySelector('[data-label="Password"]');
    const theSamePasswordInput = document.querySelector('[data-label="Repeat Password"]');
    const blackBack = document.getElementById('main__black-back');
    const popupButton = document.getElementsByClassName('popup__btn')[0];
    const link = document.getElementById('link');
    const mainTitle = document.getElementsByClassName('desc__form-title')[0];
    const unneededElements = document.querySelectorAll('.need-for-signup');
    const descButton = document.getElementById('desc__btn');
    const needElements = document.querySelectorAll('.need-for-login');


    function checkFullName(evt) {
        const isDigit = /\d/.test(evt.key);

        if (isDigit) {
            evt.preventDefault();
        }
    }

    function checkString(evt) {
        const invalidSymbols = [".", ","]

        if (invalidSymbols.includes(evt.key)) {
            evt.preventDefault();
        }
    }

    function isAgree(evt) {
        if (checkbox.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    }

    function getEmptyInputs(inputs) {
        const inputsArray = Array.from(inputs);
        return inputsArray.filter(input => input.value.trim() === '');
    }

    function getInputLabels(formInputs) {
        const emptyInputLabels = [];

        Array.from(formInputs).forEach((input) => {
            const label = input.getAttribute('data-label');
            emptyInputLabels.push(label);
        });

        return emptyInputLabels;
    }

    function isValidCheckbox(checkbox) {
        return checkbox.checked;
    }

    function isValidPasswordLength(passwordInput) {
        const passwordValue = passwordInput.value.trim();
        const minPasswordLength = 8;
        return passwordValue.length >= minPasswordLength;
    }

    function showPopup(blackBack) {
        blackBack.classList.add('open');
        return true;
    }

    function arePasswordsSame(password1, password2) {
        return password1.value !== password2.value;
    }

    function signUp() {
        const formInputs = document.getElementsByClassName('form__input');
        const errorMessages = [];
        const emptyInputs = getEmptyInputs(formInputs);

        if (emptyInputs.length > 0) {
            const emptyInputLabels = getInputLabels(emptyInputs);
            errorMessages.push(`Необходимо заполнить ${emptyInputLabels.join(', ')}.`)
        }

        if (!isValidCheckbox(checkbox)) {
            errorMessages.push('Подтвердите свое согласие.');
        }

        if (!isValidPasswordLength(passwordInput)) {
            errorMessages.push('Пароль должен содержать не менее 8 символов.');
        }

        if (arePasswordsSame(passwordInput, theSamePasswordInput)) {
            errorMessages.push('Пароли не совпадают!');
        }

        if (errorMessages.length > 0) {
            alert(errorMessages.join('\n\n'));
            return;
        }

        showPopup(blackBack);
    }

    function changeLink() {
        location.reload();
    }

    function closePopup() {
        blackBack.classList.remove('open');

        username.value = '';
        passwordInput.value = '';

        goToLoginView();
    }

    function goToLoginView() {
        mainTitle.innerText = 'Log in to the system';
        descButton.innerText = 'Sign In';
        link.innerText = 'Sign Up';

        unneededElements.forEach(function (element) {
            element.remove();
        });

        descButton.onclick = loginHandler;
        passwordInput.onblur = null;
        link.onclick = changeLink;
    }

    function areInputsFill(fields, emptyFieldsArray) {
        fields = needElements;

        fields.forEach((field) => {
            if (field.value.trim() === '') {
                emptyFieldsArray.push(field);
            }
        });
        return emptyFieldsArray;
    }

    function finish(emptyFieldsArray) {
        alert((emptyFieldsArray.length > 0) ? 'Необходимо заполнить все поля' : `Добро пожаловать, ${username.value}!`);
    }

    function performLogin() {
        const needFieldsArray = [];
        const emptyFields = [];

        areInputsFill(needFieldsArray, emptyFields);
        finish(emptyFields);
    }

    function handler() {
        signUp();
    }

    function loginHandler() {
        performLogin();
    }


    fullName.onkeydown = checkFullName;

    username.onkeydown = checkString;

    checkbox.onchange = isAgree;

    descButton.onclick = handler;

    popupButton.onclick = closePopup;

    link.onclick = goToLoginView;

}

