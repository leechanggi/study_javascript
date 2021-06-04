// 1. String concatenation
console.log('my' + 'cat'); // my cat
console.log('1' + 2); // 12
console.log(`string listerals : 1 + 2 = ${1 + 2}`); // my cat
// \n(줄바꿈), \t(tab키) ==> javascript 특수문자열

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; 
// counter = counter +  1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
// postIncrement에 couneter의 값을 먼저 할당
// counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

// 4. assignment operators
let x = 3;
let y = 6;
x += y // x = x + y;
x -= y // x = x - y;
x *= y // x = x * y;
x /= y // x = x / y;

// 5. comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. logical operators : ||(or), &&(and), !(not) **
const value1 = false;
const value2 = 4 < 2; // false

// ||(or) : 처음으로 true 가 나오면 거기서 멈춘다!!
// 그렇기 때문에 heavy 해질수록 or연산자의 마지막에 배치한다. simple할수록 앞쪽에 배치... value1 < value2 < check()의 순서로 배치한다.
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)
// often used to compress long if-statement
// nullableObject && nullableObject.something
if(nullableObject != null){
    nullableObject.somthing;
}

function check() {
    for (let i = 0; i < 1; i++) {
        console.log(i);
    }
    return true;
}

// !(not)
console.log(!value1);

