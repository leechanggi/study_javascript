'use strict';
// 1. string concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

console.log("ellie's \n\tbook");
// ==> \n은 줄바꿈, \t 는 tab키

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation 2의 3승

// 3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement : ${preIncrement}, counter : ${counter}`)

const predecrement = --counter;
// counter = counter - 1;
// predecrement = counter;
console.log(`predecrement : ${predecrement}, counter : ${counter}`)
const postdecrement = counter--;
// postdecrement = counter;
// counter = counter - 1;
console.log(`postdecrement : ${predecrement}, counter : ${counter}`)

//