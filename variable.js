// 1. Use strict
// added in ES5
// use this for Vanila JS
'use strict';

// 2. Variabel(변수)
// let(added in ES6) ==> var(ES5 이전) // 인터넷 익스플로러에서 지원X
// mutable data type : 값이 변하는 데이터 타입.
let globalName = 'global name';
{
    let name = 'Chang-gi';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
} 
// ==> block scope
console.log(name);
console.log(globalName);

// var (don't ever use this.)
// var hoisting(끌어올림) : 변수를 어디에 선언했는지 상관없이 변수를 항상 끌어올려주는 것을 의미.
// block scope이 없다.
console.log(age);
age = 4;
console.log(age);
var age;

// 3.Constant(상수)
// favor immutable data type always for a few reasons
// - security : 보안상의 이유
// - thread safety : thread가 동시에 돌아가면서 어플리케이션이 안정적으로 돌아가도록 도와준다.
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4.Variable type
// primitive, single item : number, string, boolean, null, undefiend, symbol, object, box container
//function, first-class function(function도 다른 데이터 타입처럼 변수로 선언이 가능하다!)
//let a: number = 12;(타입스크립트에서는 변수의 type을 지정해주어야한다.)
//C언어나 java에서는 데이터의 양에따라 타입의 종류가 많다.(short,long,int / float, double 등등...)

// number - special numeric values : 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(fiarly new, don't use it yet)
const bigInt = 11111111111111111111111111111111111111111111n; 
// 2의 53승 - 1(number) 보다 큰 정수를 표현할수 있다.
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

// boolean
// false : 0, null, undfined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1;  // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
//console.log(`value : ${symbol1}, type : ${typeof symbol1}`);
//symbol은 출력할때 반드시 .description 으로 string 으로 변환해서 출력하여야 한다.
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

//objet, real-life object, data structure
const ellie = {name : 'ellie', age : 20};
ellie.age = 21;
console.log(ellie);

//5. Dynamic typing : dynimically type lang ==> typescript(자바스크립트의 타입의 가변성때문에 타입스크립트를 사용한다.)
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type : ${typeof text}`);
text = 1;
console.log(`value: ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type : ${typeof text}`);