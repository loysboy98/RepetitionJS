// "use strict";

alert('Hello World');

const result = confirm('Are you here ?');
console.log(result)

const answer = prompt('Вам есть 18 ?', '18');
console.log(answer);

const answers = [];
answers[0] = prompt('What`s your name ?', '');
answers[1] = prompt('What`s your mail ?', '');
answers[2] = prompt('What`s your age ?', '');

document.write(answers);

// typeof можно узнать какой тип данных
// const answers = [];
// console.log(typeof(answers));

// это работает только `` кавычками и ${}
// const category = 'toys'
// console.log(`https://someurl.com/${category}`);
// console.log(`https://someurl.com/${category}/page/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`)

// const userName = prompt('What is your name?', '');
// alert(`Hello, ${userName}`);

// console.log('arr' + " - object");
//+'5' добавление плюс делает тип число
// console.log(5 + +'5');

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// оператор который будет добавлять по одной или удалять
// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// Boolean ===
// console.log(2*4 == 8);
// оператор сравнение
// console.log(2*4 === 8);
// //


// const pin = prompt('Your pin code?', '');
// const userPin = 4444;
// console.log(pin == userPin);


//для математические решения + добавляются чтобы строка сделать числа
// const a = +prompt('первое число', '');
// const b = +prompt('второе число', '');
// alert(`Ответ: ${a+b}`);
// console.log(a+b);

// оператор "&& и" типа и это правда и это правда
// const isChecked = true,
//       isClose = true;
// console.log(isChecked && isClose);

//-------------------------------------
