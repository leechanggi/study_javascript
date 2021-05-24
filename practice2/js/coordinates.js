'use strict';
//1, 좌표(coordinates)
// Element.getBoundingClientRect();
// ==> element의 사이즈 위치에 관한 정보를 출력한다.
// Client x,y VS Page x,y
// ==> Client x,y는 브라우저 창에서 떨어진 정도이다.
// ==> 하지만 Page x,y 는 페이지의 맨위에서 가장 왼쪽에서 떨어진 값이 출력된다.
const special = document.querySelector('.special')
special.addEventListener('click', event => {
    const rect  = special.getBoundingClientRect();
    console.log(rect);
    console.log(`client : ${event.clientX}, ${event.clientY}`);
    console.log(`page : ${event.pageX}, ${event.pageY}`);
});
const scrollBy = document.querySelector('.scroll-by');
const scrollTo = document.querySelector('.scroll-to');
const scrollInto = document.querySelector('.scroll-into');
scrollBy.addEventListener('click', () => {
    window.scrollBy({top: 100, left: 0, behavior: 'smooth'});
});
scrollTo.addEventListener('click', () => {
    window.scrollTo(0, 100);
});
scrollInto.addEventListener('click', () => {
    special.scrollIntoView();
});