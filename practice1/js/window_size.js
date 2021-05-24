'use strict';
const textBox = document.querySelector('.text-box');
function updateTag() {
    textBox.innerHTML = `
    window.screen : ${window.screen.width}, ${window.screen.height}<br/>
    window.outer : ${window.outerWidth}, ${window.outerHeight}<br/>
    window.inner : ${window.innerWidth}, ${window.innerHeight}<br/>
    documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
    `;
}
// window.screen.width && .height : 윈도우의 해상도
// window.outerWidth && outerHeight : 브라우저의 사이즈(브라우저의 검색부분, 탭부분, 등등을 모두 포함)
// window.innerWidth && innerHeight : 웹페이지의 사이즈 및 스크롤바가 있다면 아래까지, 나타나는 모든 페이지의 크기
// document.documentElement.clientWidht && clientHeight : 문서자체의 사이즈(스크롤바를 제외함.)
window.addEventListener('resize', () => {
    updateTag();
});
updateTag();