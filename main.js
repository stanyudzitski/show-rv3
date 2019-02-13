var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    console.log('Btn clicked!');
});

const a = '333';
console.log(a);

const b = 'just a string';
console.log(`this is a: ${a}, and this is b: ${b}`);

let str = 'not just asdasdas, but something usefull';

function defaultFunc() {
    let num = 0;
    return function incrementerNum() {
        num++;
        console.log(num);
    }
};

let myNum = defaultFunc();
myNum();
myNum();
myNum();
myNum();


let myNum1 = defaultFunc();
myNum1();
myNum1();
myNum1();
myNum1();