"use strict";

window.onload = function () {
    // console.log('Весь JavaScript код загружен.');

    const fullName = document.getElementById('full-name');

    fullName.onkeydown = (evt) => {
        const name = !parseInt(evt.key);
        if (name === false) {
            return false;
        }
        console.log(name);
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

//     5. При нажатии на кнопку “Sign Up”:

// • Пароль должен содержать не менее 8 символов. Если пароль короче, то выведите сообщение об ошибке через alert.
// • Проверьте совпадают ли пароли из двух текстовых полей. Если пароли не совпадают, выведите сообщение об ошибке, используя alert.
// • Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите сообщение об ошибке, используя alert.
// • Если код прошёл все проверки успешно - должен появиться попап с текстом «На вашу почту выслана ссылка, перейдите по ней,
//         чтобы завершить регистрацию» и кнопкой «ОК». При нажатии на кнопку «ОК» окно закрывается, форма очищается
//     и пользователя перебрасывает на страницу логина (см. п.6). Модального окна в макете нет, его нужно создать самостоятельно,
//         соблюдая общую стилистику макета.

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
        console.log('Form submitted successfully');
    }


    const passwordInput = document.querySelector('[data-label="Password"]');

    function checkPasswordLength() {
        let passwordValue = passwordInput.value.trim();

        if (passwordValue.length < 8) {
            console.log('Пароль должен содержать не менее 8 символов');
        }
    }

    passwordInput.onblur = checkPasswordLength;

    document.querySelector('.btn').onclick = checkFields;


    //
    // function checkFields() {
    //     let form = document.getElementsByClassName('form');
    //     let inputs = document.getElementsByClassName('form__input');
    //
    //     for (let i = 0; i < inputs.length; i++) {
    //         if (inputs[i].value.trim() === '') {
    //             let label = inputs[i].getAttribute('data-label');
    //             console.log(`Заполните поле ${label}`);
    //             return;
    //         }
    //     }
    //     console.log('Form submitted successfully');
    // }
    //
    // document.querySelector('.btn').onclick = checkFields;
    // // document.getElementsByClassName('btn')[0].onclick = checkForm;


};

