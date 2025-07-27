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