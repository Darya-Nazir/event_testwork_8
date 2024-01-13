"use strict";

window.onload = function () {
    // console.log('Весь JavaScript код загружен.');


    let booleanArray = [];
    let emptyFields = [];

    const invalidSymbols = [
        ".",
        ","
    ]

    const fullName = document.getElementById('full-name');
    const username = document.getElementById('your-username');
    const checkbox = document.getElementById('checkbox');
    const passwordInput = document.querySelector('[data-label="Password"]');
    const theSamePasswordInput = document.querySelector('[data-label="Repeat Password"]');
    const blackBack = document.getElementById('main__black-back');
    const popupButton = document.getElementsByClassName('popup__btn')[0];




    function isNameValid() {
        const name = fullName.value;
        const hasDigits = /\d/.test(name);
        const isValid = !hasDigits;

        console.log(isValid ? name : 'Ввод цифр запрещен');

        booleanArray.push(isValid);
    }

    fullName.onblur = isNameValid;


    // Эта функция не имеет булева значения, которое попадает в массив,
    // потому что она просто не дает возможности ввести не тот символ.
    function checkString(evt) {
        if (invalidSymbols.includes(evt.key)) {
            evt.preventDefault();
        }
    }

    username.onkeydown = checkString;


    checkbox.onchange = (evt) => {
        if (checkbox.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    };


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
            console.log(`Необходимо заполнить ${emptyFields.join(', ')}`);
            booleanArray.push(false);
        } else {
            console.log('Все поля заполнены');
            booleanArray.push(true);
        }
    }

    function isValidCheckbox() {
        const isChecked = checkbox.checked;
        booleanArray.push(isChecked);

        if (!isChecked) {
            console.log('Подтвердите свое согласие');
        }

        return isChecked;
    }


    function isValidPasswordLength() {
        let passwordValue = passwordInput.value.trim();

        if (passwordValue.length < 8) {
            console.log('Пароль должен содержать не менее 8 символов');
            booleanArray.push(false);
        } else {
            booleanArray.push(true);
        }
    }

    passwordInput.onblur = isValidPasswordLength;


    function isPasswordsTheSame() {
        if (passwordInput.value !== theSamePasswordInput.value) {
            console.log('Пароли не совпадают!')
            booleanArray.push(false);
        } else {
            console.log('Пароли совпадают')
            booleanArray.push(true);
        }
    }

    theSamePasswordInput.onblur = isPasswordsTheSame;

    function showBooleanArray() {
        console.log(booleanArray);
    }

    function clearArray() {
        if (booleanArray.length > 0) {
            booleanArray = [];
        }
    }


    function showPopup() {
        if (booleanArray.includes(false)) {
            console.log('Неправильно заполнена форма');
            return false;
        }
        blackBack.classList.add('open');
    }



    function handler() {
        clearArray();
        checkFields();

        isValidFields();
        isValidCheckbox();
        isValidPasswordLength();

        showBooleanArray();
        showPopup();
    }

    document.querySelector('.btn').onclick = handler;

const link = document.getElementById('link');
function closePopup () {
    blackBack.classList.remove('open');
    location.reload();
    link.click();
}

popupButton.onclick = closePopup;


}

