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


    // function checkFields() {
    //     let form = document.getElementsByClassName('form');
    //     let inputs = document.getElementsByClassName('form__input');
    //
    //     for (let i = 0; i < inputs.length; i++) {
    //         if (inputs[i].value.trim() === '') {
    //             let label = inputs[i].getAttribute('data-label');
    //             console.log(`Заполните поле ${label}`);
    //             // return;
    //         }
    //         console.log('Все поля заполнены');
    //     }
    //
    // }


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

    function handler() {
        clearArray();
        checkFields();

        isValidFields();
        isValidCheckbox();
        isValidPasswordLength();
        isPasswordsTheSame();

        showBooleanArray();
    }

    document.querySelector('.btn').onclick = handler;


    const popupButton = document.getElementsByClassName('popup__btn');


    function showPopup() {

    }

// Логика:
//     Собираем результаты в массив. Делаем функцию с проверкой с помощью циклов. Если хоть одно значение ложное -
//     запрещаем отправлять
//     форму на сервер. Для этого есть специальные методы.
//     Logic:
//         Collect the results in an array. Create a function with checks using loops. If at least one value is false -
//     prohibit submitting the form to the server. There are special methods for this.
}

