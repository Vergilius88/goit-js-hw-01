"use trict"

let deliveryCountry = prompt('Укажите страну доставки');

if (deliveryCountry === null) {
    alert('Вы не указали страну доставки!');
}
else {
    deliveryCountry = deliveryCountry.toLowerCase();

    const chinaPrice = 100;
    const chilePrice = 250;
    const australiaPrice = 170;
    const indiaPrice = 80;
    const jamaicaPrice = 120;

    switch (deliveryCountry) {
      case "китай":
        alert(
          `Доставка в ${deliveryCountry} будет стоить ${chinaPrice} кредитов`
        );
        break;

      case "чили":
        alert(
          `Доставка в ${deliveryCountry} будет стоить ${chilePrice} кредитов`
        );
        break;

      case "австралия":
        alert(
          `Доставка в ${deliveryCountry} будет стоить ${australiaPrice} кредитов`
        );
        break;

      case "индия":
        alert(
          `Доставка в ${deliveryCountry} будет стоить ${indiaPrice} кредитов`
        );
        break;

      case "ямайка":
        alert(
          `Доставка в ${deliveryCountry} будет стоить ${jamaicaPrice} кредитов`
        );
        break;

      default:
        alert("В вашей стране доставка не доступна");
    }
}
