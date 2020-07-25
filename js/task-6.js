"use strict";

let total = 0;
let input;

do {
  input = prompt("Введите число");

  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  if (input === null) {
    alert(`Вы прервали ввод`);
    break;
  }

  total += +input;
} while (input);

alert(`Общая сумма чисел равна ${total}`);
