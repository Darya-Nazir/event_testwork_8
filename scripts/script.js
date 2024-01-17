"use strict";
window.onload = function () {

    let booleanArray = [];
    let emptyFields = [];
    let needFieldsArray = [];

    const invalidSymbols = [".", ","]

    const fullName = document.getElementById('full-name');
    const username = document.getElementById('your-username');
    const checkbox = document.getElementById('checkbox');
    const passwordInput = document.querySelector('[data-label="Password"]');
    const theSamePasswordInput = document.querySelector('[data-label="Repeat Password"]');
    const blackBack = document.getElementById('main__black-back');
    const popupButton = document.getElementsByClassName('popup__btn')[0];
    const link = document.getElementById('link');
    const mainTitle = document.getElementsByClassName('desc__form-title')[0];
    const unneededElements = document.querySelectorAll('.unneeded-to-login');
    const descButton = document.getElementById('desc__btn');
    const needElements = document.querySelectorAll('.need-to-login');


    function checkFullName(evt) {
        const isDigit = /\d/.test(evt.key);

        if (isDigit) {
            evt.preventDefault();
        }
    }


    function checkString(evt) {
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


    function checkFields() {
        let inputs = document.getElementsByClassName('form__input');
        let inputsArray = Array.from(inputs);

        inputsArray.forEach((input) => {
            if (input.value.trim() === '') {
                let label = input.getAttribute('data-label');
                emptyFields.push(label);
            }
        });
    }


    function isValidFields() {
        if (emptyFields.length > 0) {
            booleanArray.push(false);
        } else {
            booleanArray.push(true);
        }
    }


    // function isValidCheckbox() {
    //     const isChecked = checkbox.checked;
    //     booleanArray.push(isChecked);
    //
    //     if (!isChecked) {
    //         // alert('Подтвердите свое согласие');
    //     }
    //
    //     return isChecked;
    // }


    function isValidPasswordLength() {
        let passwordValue = passwordInput.value.trim();

        if (passwordValue.length < 8) {
            booleanArray.push(false);
        } else {
            booleanArray.push(true);
        }
    }


    function isPasswordsTheSame() {
        if (passwordInput.value !== theSamePasswordInput.value) {
            booleanArray.push(false);
        } else {
            // console.log('Пароли совпадают')
            booleanArray.push(true);
        }
    }


    // function showBooleanArray() {
    //     console.log(booleanArray);
    // }


    function clearArray() {
        if (booleanArray.length > 0) {
            booleanArray = [];
        }
    }


    function showPopup() {
        let errorMessages = [];

        if (booleanArray.includes(false)) {
            if (emptyFields.length > 0) {
                errorMessages.push(`Необходимо заполнить ${emptyFields.join(', ')}.`);
            }

            if (!checkbox.checked) {
                errorMessages.push('Подтвердите свое согласие.');
            }

            if (passwordInput.value.trim().length < 8) {
                errorMessages.push('Пароль должен содержать не менее 8 символов.');
            }

            if (passwordInput.value !== theSamePasswordInput.value) {
                errorMessages.push('Пароли не совпадают!');
            }

            alert(errorMessages.join('\n\n'));
            return false;
        }

        blackBack.classList.add('open');
    }


function changeLink () {
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

        descButton.onclick = handlerForLogin;
        passwordInput.onblur = null;
        link.onclick = changeLink;
    }


    function areInputsFill() {
        needElements.forEach((field) => {
            if (field.value.trim() === '') {
                needFieldsArray.push(field);
            }
        });
    }


    function finish() {
        if (needFieldsArray.length > 0) {
            alert('Необходимо заполнить все поля');
        } else {
            alert(`Добро пожаловать, ${username.value}!`);
        }
    }


function signUp(){
    clearArray();
    checkFields();

    isValidFields();
    // isValidCheckbox();
    isValidPasswordLength();

    // showBooleanArray();
    showPopup();
}


    function goLoginForm(){
        areInputsFill();
        finish();
    }


    function handler() {
        signUp();
    }


    function handlerForLogin() {
        goLoginForm();
    }


    fullName.onkeydown = checkFullName;

    username.onkeydown = checkString;

    checkbox.onchange = isAgree;

    passwordInput.onblur = isValidPasswordLength;

    theSamePasswordInput.onblur = isPasswordsTheSame;

    descButton.onclick = handler;

    popupButton.onclick = closePopup;

    link.onclick = goToLoginView;

}

