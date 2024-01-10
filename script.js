"use strict";

window.onload = function () {
    // console.log('Весь JavaScript код загружен.');


    let booleanArray = [];

    const fullName = document.getElementById('full-name');


    function isNameValid() {
        const name = fullName.value;
        const hasDigits = /\d/.test(name);
        const isValid = !hasDigits;

        console.log(isValid ? name : 'Ввод цифр запрещен');

        booleanArray.push(isValid);
    }

    fullName.onblur = function () {
        isNameValid();
        console.log('booleanArray:', booleanArray);
    }


    const username = document.getElementById('your-username');

    const invalidSymbols = [
        ".",
        ","
    ]

    function checkString(evt) {
        if (invalidSymbols.includes(evt.key)) {
            evt.preventDefault();
        }
    }

    username.onkeydown = checkString;


    const checkbox = document.getElementById('checkbox');

    checkbox.onchange = (evt) => {
        if (checkbox.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    };


    function checkFields() {
        let form = document.getElementsByClassName('form');
        let inputs = document.getElementsByClassName('form__input');

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === '') {
                let label = inputs[i].getAttribute('data-label');
                console.log(`Заполните поле ${label}`);
                return;
            }
        }

        console.log('Все поля заполнены');
    }

    function isSelectCheckbox() {
        if (!checkbox.checked) {
            console.log('Подтвердите свое согласие');
            // return;
        }
    }

    const passwordInput = document.querySelector('[data-label="Password"]');

    function checkPasswordLength() {
        let passwordValue = passwordInput.value.trim();

        if (passwordValue.length < 8) {
            console.log('Пароль должен содержать не менее 8 символов');
        }
    }

    passwordInput.onblur = checkPasswordLength;


    const theSamePasswordInput = document.querySelector('[data-label="Repeat Password"]');

    function checkPasswordsSame() {
        if (passwordInput.value !== theSamePasswordInput.value) {
            console.log('Пароли не совпадают!')
        } else {
            console.log('Пароли совпадают')
        }
    }

    theSamePasswordInput.onblur = checkPasswordsSame;


    function handler() {
        checkFields();
        isSelectCheckbox();
    }

    document.querySelector('.btn').onclick = handler;

//     5. При нажатии на кнопку “Sign Up”:

// • Если код прошёл все проверки успешно - должен появиться попап с текстом «На вашу почту выслана ссылка, перейдите по ней,
//         чтобы завершить регистрацию» и кнопкой «ОК». При нажатии на кнопку «ОК» окно закрывается, форма очищается
//     и пользователя перебрасывает на страницу логина (см. п.6). Модального окна в макете нет, его нужно создать самостоятельно,
//         соблюдая общую стилистику макета.

    const popupButton = document.getElementsByClassName('popup__btn');


    function showPopup() {

    }


};

