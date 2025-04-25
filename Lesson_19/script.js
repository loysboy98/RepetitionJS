//  Terms - Условия 'if'
if (4 == 4){
  console.log("Ok!");
};

// -------------------------
if (4 == 9) {
  console.log('Ok!');
} else {
  console.log('Error!');
};

// // -------------------------
const data = 50;

if (data == 49){
  console.log(true);
} else {
  console.log(false);
};

// // -------------------------
const num = 50;

if (num < 49){             // (num < 49) сначала проверяем это Условия
  console.log('Error!');
} else if (num > 100) {    // (num > 100) Патом проверяем это Условия
  console.log('More!');
} else {
  console.log('Ok!');     //если сверху два условия не полнился тогда выполняем это
};

// Тернарная оператор
const ter = 50;
(ter === 50) ? console.log('Ok!') : console.log('Error!');

// // -------------------
const sw = 50;

switch (sw) {
  case 49:
    console.log('Неверно!');
    break;
  case 100:
    console.log('Неверно!');
    break;
  case 50:
    console.log('Верно!');
    break;
  default:                 // если ни одно условие не выполнился то ответ default
    console.log('Не одно условия Не верно!')
}
