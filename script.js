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

    username.onkeydown = (evt) => {
        if (evt.key === "." || evt.key === ",") {
            evt.preventDefault();
        }
    }

    // Та же самая функция, но именованная. Что лучше?
    function handleKeyDown(evt) {
        if (evt.key === "." || evt.key === ",") {
            evt.preventDefault();
        }
    }

    username.onkeydown = handleKeyDown;


    // Функция делает то же самое, что и выше. Какой вариант лучше?
    username.oninput = (evt) => {
        evt.target.value = evt.target.value.replace(/[.,]/g, '');
    }






};