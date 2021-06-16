'use strict';

// Array🎉

// 1. Declaration , 배열의 선언;
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); //2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined

console.log(fruits[fruits.length - 1]);
// ==> 배열의 마지막 데이터에 접근

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
console.clear();

// 4. Addtion, deletion, copy
// push: add an item to the end , 배열의 제일 뒤에 배열을 추가함.
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end , 배열의 제일 뒤에 배열을 삭제함.
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging, 배열의 제일 앞에서 배열을 추가함
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging, 배열의 제일 앞에서 배열을 삭제함.
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// ==> shift와 unshift는 pop과 push보다 매우 느리다. 각 배열의 데이터가 모두 수정되어야 하기 때문이다. pop과 push의 사용을 권장한다.

// splice: remove an item by index position
// ==> splice(a, b) : a번째 배열부터 b만큼의 배열을 지운다. b를 작성하지 않으면 a이후의 모든 배열의 값을 삭제한다.
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉');
// 위처럼 splice(1, 1, '🍏', '🍉')는 배열 1에서 부터 1만큼(1 본인)을 삭제하고 바로 그곳에서부터 추가된 과일 2개의 배열을 추가한다. ==> splice(꼬아서 잇다.)
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
// fruits.concat(fruits2) ==> fruits배열에 fruits2배열을 뒤에 이어 붙인 후 newFruits로 명명된 새로운 배열이 만들어진다.
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));
// indexof ==> 배열안에 특정값이 몇번째에 존재하는지 검사. 만약 존제하지 않는다면 -1 를 출력한다. 그리고 특정값이 여러개 존재할경우에는 첫번째 값의 배열위치를 출력한다.

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));
// 배열안에 특정 값이 존재하는지 검사. 존재의 여부! true or false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));
// 특정값이 여러개 존재할경우에는 마지막 값의 배열위치를 출력한다.