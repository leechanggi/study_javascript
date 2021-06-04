'use strict';
// Object-oriendted programming
// class: template => 붕어빵 틀!! / fields(contructor)와 methods 를 묶어욧!
// object: instance of a class => 팥 붕처빵!!, 슈크림 붕어빵!! etc.
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name); // ellie
console.log(ellie.age); // 20
ellie.speak(); //ellie: hello!

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! => 현재 많이 사용되어지고 있진 않다. 아직 사파리에서도 지원되지 않는다. 사용 권장하지 않음.(바벨을 사용하자!!)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2; //public
  #privateField = 0; //private : class 내부에서만 값이 변경되고 보여진다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
// constructor : class의 객체를 생성하고 초기화 하기 위한 메서드이다.
// static : class의 정적 매서드를 정의한다.

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
// 위의 Article 부분에 article1, 이나 article2를 삽입할경우 오류가 발생한다. publisher 는 Article 에만 매서드를 정의하였기 때문이다.
Article.printPublisher();

// 5. Inheritance => 상속
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // Shape에 Rectangle 이라는 class 연장.
class Triangle extends Shape {
  draw() {
    super.draw(); // super(부모)의 매소드를 호출하고난 후에
    console.log('🔺'); // overwriting 된 내용을 호출한다.
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);
