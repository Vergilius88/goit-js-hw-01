"use strict";

let credits = 23580;

let pricePerDroid = 3000;

const amount = prompt("Желаемое количество ремонтных дроидов");

let totalPrice = Number(amount) * pricePerDroid;

let residualBalance = credits - totalPrice;

if (amount === null) {
  console.log("Отменино пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${amount} дроидов, на счету осталось ${residualBalance} кредитов.`
  );
}
