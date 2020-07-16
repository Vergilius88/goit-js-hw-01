"use strict";

let total = 0;

let input;

do {
  input = +prompt("Введите число");
  
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    break;
  } else if (input === 0) {
    alert(`Вы прервали ввод`);
   continue ;
  } 
    total += input;
  
} while (input);

alert(`Общая сумма чисел равна ${total}`);
