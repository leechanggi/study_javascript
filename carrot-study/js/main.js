'use strict';
// timer function.
const playBtn = document.querySelector('#playBtn');
const stopBtn = document.querySelector('#stopBtn');
const timer = document.querySelector('#timer');
let time = 5;
let min = "";
let sec = "";
let isPause = false;
let timerSel;
function intervalFnc() {
    if (!isPause) {
        if (time > 0) {
            min = parseInt(time / 60);
            sec = time % 60;
            let md = min;
            let sd = sec;
            if (md < 10  && md >= 0) {
                md = '0' + md;
            } else{
                md = md;
            }
            if (sd < 10  && sd >= 0) {
                sd = '0' + sd;
            } else{
                sd = sd;
            }
            timer.innerHTML = `${md}:${sd}`;
            console.log(time);
            time--;
        }else{
            timer.innerHTML = "00:00";
            gameFail();
            clearInterval(timerSel);
            console.log(time);
        };
    };
};
function playBtnClickFnc() {
    isPause = false;
    timerSel = setInterval(intervalFnc, 1000);
    playBtn.setAttribute('style', 'display: none');
    stopBtn.setAttribute('style', 'display: inline-block');
    gameFnc();
};
function stopBtnClickFnc() {
    clearInterval(timerSel);
    isPause = true;
    stopBtn.setAttribute('style', 'display: none');
    playBtn.setAttribute('style', 'display: inline-block')
}
playBtn.addEventListener('click', playBtnClickFnc);
stopBtn.addEventListener('click', stopBtnClickFnc);
// gameFnc.
function gameFnc() {
    let carrotNum = 10;
    let carrot = document.getElementsByClassName('carrot');
    const bug = document.querySelector('.bug');
    const bugNum = 5;
    const ground = document.querySelector(".ground");
    document.querySelectorAll('.carrot').forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll('.bug').forEach(e => e.parentNode.removeChild(e));
    let i;
    for (i = 0; i < carrotNum; i++) {
        let carrotDom = document.createElement('span');
        let randX = Math.floor(Math.random() * 101);
        let randY = Math.floor(Math.random() * 101);
        carrotDom.setAttribute('class', 'carrot');
        carrotDom.setAttribute('data-id', i);
        carrotDom.setAttribute('style', `left : ${randX}%; top : ${randY}%;`)
        ground.appendChild(carrotDom);
    };
    for (i = 0; i < bugNum; i++) {
        let bugDom = document.createElement('span');
        let randX = Math.floor(Math.random() * 101);
        let randY = Math.floor(Math.random() * 101);
        bugDom.setAttribute('class', 'bug');
        bugDom.setAttribute('style', `left : ${randX}%; top : ${randY}%;`)
        ground.appendChild(bugDom);
    };
    for (i = 0; i < carrotNum; i++) {
        carrotNum = 10;
        document.querySelector('#carrotNum').textContent = carrotNum;
        carrot[i].addEventListener('click', function () {
            this.remove();
            carrotNum = Number(carrotNum);
            carrotNum --;
            document.querySelector('#carrotNum').textContent = carrotNum;
        });
    }
}
// Execution
let dimScreen = document.querySelector('#dim-screen');
let resettBtn = document.querySelector('#resetBtn');
function gameFail() {
    dimScreen.setAttribute('style', 'display : block;');
}
resettBtn.addEventListener('click', () => {
    dimScreen.setAttribute('style', 'display : none;');
    time = 3;
    playBtnClickFnc();
})