'use strict';
function coordination(e) {
    const target = document.querySelector('.target');
    const targetText = document.querySelector('.targetText')
    const targetRect = target.getBoundingClientRect();
    let targetHalfWidth = targetRect.width / 2;
    let targetHalfHeidht = targetRect.height / 2;
    let X = e.clientX;
    let Y = e.clientY;
    // target.style.left = `${X}px`;
    // target.style.top = `${Y}px`;
    target.style.transform = `translateX(${X - targetHalfWidth}px) translatey(${Y - targetHalfHeidht}px)`;
    targetText.innerHTML = `X : ${X}px, Y : ${Y}px`;
}
addEventListener('load', () =>{
    document.addEventListener('mousemove', coordination);
});