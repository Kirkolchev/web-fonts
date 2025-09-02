"use strict"

const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
    const opened = document.documentElement.classList.toggle('menu-open');
    document.body.classList.toggle('look', opened);
});