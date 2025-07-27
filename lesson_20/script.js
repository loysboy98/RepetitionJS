"use strict"

let num = 50;

while (num <= 55){
  console.log(num);
  num++;
}
console.log(num);

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++){
//   console.log(num);
//   num++;
// }

for (let i = 1; i < 10; i++){
  if (i === 3){
    // break;
    continue;
  }
  console.log(i);
};

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
}

//Цикл в цикле и метки
for (let i = 0; i < 3; i++){
  console.log(i, 'a');
  for (let j = 0; j < 3; j++){
    console.log(j, 'b');
  }
}

// *
// **
// ***
// ****
// *****
// ******
let result = '';
const length = 7;

for (let i = 1; i < length; i++){
  for (let j = 0; j < i; j++){
    result += "*";
  }
  result += '\n';
  
}
console.log(result)


first: for (let i = 0; i < 3; i++){
  console.log(`First level ${i}`);
  for (let j = 0; j < 3; j++){
    console.log(`Second level ${j}`);
      for (let k = 0; k < 5; k++){
        if (k == 2) break first;
        console.log(`Third level ${k}`);
    }
  }
}


// Задачи: 1
// При помощи цикла выведите числа от 5 до 10 в консоль. 
// 5 и 10 включительно. Цикл можно использовать любой

function firstTask(){
  let num = 5;
  while (num <= 10){
    console.log(num)
    num++;
  }
}

// Задачи: 2
// При помощи цикла for вывести числа от 20 до 10 
// в консоль. В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл

function secondTask(){
  for (let i = 20; i >= 10; i--){
    if (i === 13) break;
    console.log(i)
  }
}

// Задачи: 3
// При помощи цикла for выведите
// чётные числа от 2 до 10 включительно
function thirdTask() {
    for (let i = 2; i <= 10; i++){
      if (i == 3 ){
        i--;
        break
      }
      console.log(i)
    }
    
}