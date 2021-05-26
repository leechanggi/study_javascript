'use strict';
const input = document.querySelector('#textInput');
const shopListWrap = document.querySelector('.shopList-wrap');
let inputVal = input.value;
let titleText = document.querySelector('.listTitle');
function listAddFnc() {
    const shopListadd = document.createElement('li');
    shopListadd.setAttribute('class','shopList');
    shopListWrap.appendChild(shopListadd);
    let shopList = document.querySelector('.shopList');
    shopList.innerHTML = `<span class="listTitle">${inputVal = input.value}</span>
    <span class="listDel">
    <button class="btnDel" type="button"></button>
    </span>`;
}
input.addEventListener('keyup', (e)=> {
    if(e.keyCode === 13){
        listAddFnc();
    } else{
        return false;
    }
});
// const shopListWrap = document.querySelector('.shopList-wrap');
// const shopListadd = shopListWrap.createElement('li');
// shopListadd.setAttribute('class','shopList');
// const shopList = document.querySelector('.shopList');
// shopList.innerHTML = `<span class="listTitle">우유</span>
// <span class="listDel">
//     <button class="btnDel" type="button"></button>
// </span>`;
