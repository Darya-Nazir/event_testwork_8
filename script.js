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

    // Эта функция не имеет булева значения, которое попадает в массив,
    // потому что она просто не дает возможности ввести не тот символ.
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

    // Для использования метода forEach вместо цикла for, вам нужно преобразовать коллекцию inputs в массив.
    //     Вы можете использовать метод Array.from. Еще надо в одном сообщении указывать все незаполненные поля.

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

// Логика:
//     Собираем результаты в массив. Делаем функцию с проверкой с помощью циклов. Если хоть одно значение ложное -
//     запрещаем отправлять
//     форму на сервер. Для этого есть специальные методы.
//     Logic:
//         Collect the results in an array. Create a function with checks using loops. If at least one value is false -
//     prohibit submitting the form to the server. There are special methods for this.
};

