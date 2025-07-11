"use strict";

const textSpan = document.getElementById('design-role');
const roles = ["ui designer", "product designer", "product manager", "ux designer"];
let index = 0;

// Change text for design role element, apply slide in/out animation
function changeText() {
    textSpan.classList.remove('animate-slide-in');
    textSpan.classList = 'animate-slide-out';
    setTimeout(() => {
        textSpan.classList.remove('animate-slide-out');
        textSpan.style.opacity = 0;
        index = (index + 1) % roles.length;
        textSpan.textContent = roles[index];

        textSpan.classList = 'animate-slide-in';
    }, 600);


}

let interval = setInterval(changeText, 2400);
