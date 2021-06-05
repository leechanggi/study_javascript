'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax <= object를 중괄호를 이용해서 만듦.
const obj2 = new Object(); // 'object constructor' syntax <= object를 new를 이용해 만듦

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
// 자바스크립트에서에서는 properties를 나중에 추가할수도 있다. => 다른 언어에서는 거의 가능하지 않고, 사용하지 않는 것을 권장한다.
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
// 위와 같이 delete를 이용해 삭제도 가능하다. => 다른 언어에서는 거의 가능하지 않음, 사용을 권장하지 않는다.
console.log(ellie.hasJob);

// 2. Computed properties <= 계산된 properties!
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // 아래는 위와 같은 의미이며, 아래처럼 사용하는 것을 computed properties라고 부른다. 사용시에는 반드시 string type으로 명시해야한다.
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);
// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
