//https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/Conditionals
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
// tester 
// // -------------------------
const data = 50;

if (data == 49){
  console.log(true);
} else {
  console.log(false, `Your input ${data}`)
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

// --------------------------------

let cheese = "Cheddar";

if (cheese) {
  console.log("Ура! Есть сыр для приготовления бутерброда.");
} else {
  console.log("Сегодня нет сыра для бутерброда.");
}
// -----------------------------

const choice = "sunny";
let temperature = 90;

if (choice == "sunny") {
  if (temperature < 86) {
    console.log(`Сейчас ${temperature}, градусов по фаренгейту — хорошо и солнечно. Идите на пляж, или в парк, и купите мороженое.`);
  } else if (temperature >= 86) {
    console.log(`Сейчас ${temperature}, градусов по фаренгейту — Жара! Если вы хотите выйти на улицу, обязательно используйте солнцезащитный крем.`);
  }
}

// -----------------------------

//Логические операторы: И, ИЛИ и НЕ
//предыдущий фрагмент кода можно переписать так
const choice2 = "sunny";
let temperature2 = 86;
//Так, для примера, первый блок кода выполнится только в том случае, если choice2 === 'sunny' и temperature2 < 86 вернут значение true.
// коротко сказать если оба true то она сработает!!!
if (choice2 === "sunny" && temperature2 <86){
  console.log(`Сейчас ${temperature2}, градусов по фаренгейту — хорошо и солнечно. Идите на пляж, или в парк, и купите мороженое.`);
} else if (choice2 === "sunny" && temperature2 >= 86){
  console.log(`Сейчас ${temperature2}, градусов по фаренгейту — Жара! Если вы хотите выйти на улицу, обязательно используйте солнцезащитный крем.`);
}

// -----------------------------
// пример оператора ИЛИ: " || "
const iceCreamVanOutside = '';
const houseStatus = 'в огне';

if (iceCreamVanOutside || houseStatus === "в огне"){
  console.log('Вы должны быстро покинуть дом.');
} else {
  console.log('Вероятно, можно в нем оставаться.');
}