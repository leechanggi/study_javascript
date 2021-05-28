'use strict';
const input = document.querySelector('#textInput');
const shopListWrap = document.querySelector('.shopList-wrap');
let cnt = 0;
function listAddFnc() {
    const shopListadd = document.createElement('li');
    let inputVal = input.value;
    shopListadd.setAttribute('class','shopList');
    shopListWrap.appendChild(shopListadd);
    shopListadd.innerHTML = `<span class="listTitle">${inputVal = input.value}</span>
    <span class="listDel">
        <button class="btnDel ${cnt}" type="button" onclick="listDelFnc()"></button>
    </span>`;
    input.value = '';
    cnt ++;
}
function listDelFnc() {
    let delBtn = document.getElementsByClassName('btnDel');
    console.log(delBtn);
}
input.addEventListener('keyup', (e)=> {
    if(e.keyCode === 13){
        listAddFnc();
    } else{
        return false;
    }
    e.preventDefault();
});