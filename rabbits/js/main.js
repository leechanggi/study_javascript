'use strict'; 
const btnFind = document.querySelector('.btnFind');
const rabbit = document.querySelector('.rabbit');
btnFind.addEventListener('click', () => {
    rabbit.scrollIntoView({behavior: 'smooth', block: 'center'});
});