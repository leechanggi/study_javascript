function add(num1, num2) {
    return num1 + num2;
};
function divide(num1, num2) {
    return num1 / num2;
};
function surprise(operator) {
    const result = operator(2, 3); // add(2, 3)
    console.log(result);
};
surprise(divide);
// 함수를 전달한다는 것은 reference가 복사되어서 전달되는 것이다.

// false : 0, -0, '', null, undefined;
// true : -1, 1, 기타 등등 false를 제외한 모든 값.;
if (-1) {
    console.log('true!');
}else{
    console.log('false!');
}

let obj/* = {
    name : 'ellie',
}*/; //undefined
if (obj) {
    console.log(obj.name);
};

obj && console.log(obj.name);
// && 연산자는 앞이 ture가 되야 뒤가 실행이 된다. 그렇기 때문에 뒤의 console.log는 실행되지 않는다.
// 그렇기때문에 위를 두가지는 동일하지만, 아래가 더 깔끔하고 활용성이 높기 때문에 아래와 같이 사용한다.

class Counter {
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    increase(){
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            // if (this.callback) {
            //     this.callback(this.counter);
            // }
            this.callback && this.callback(this.counter);
        }
    }
}
function printSomthing(num) {
    console.log(`Yo! ${num}`);
}
function alertNum(num) {
    alert(`Wow! ${num}`);
}
const printCounter = new Counter(printSomthing);
const alertCounter = new Counter(alertNum);