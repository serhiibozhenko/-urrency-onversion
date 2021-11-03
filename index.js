let operationAgain = true;
while (operationAgain) {
  let money;
  let moneyConvert;
  let sum;
  do {
    money = prompt(
      "Напишите валюту(в абревеатуре) которую вы хотите конвертировать, придерживаясь синтаксиса где usd - доллар, rub - российский рубль, uk - украинская гривна, euro - евро, pl - польский злотый"
    );
  } while (
    money !== "usd" &&
    money !== "rub" &&
    money !== "uk" &&
    money !== "euro" &&
    money !== "pl"
  );

  while (isNaN(sum) || sum == "" || sum == null) {
    sum = +prompt("Введите сумму валюты которую вы будете конвертировать");
  }

  do {
    moneyConvert = prompt(
      "Напишите валюту (в абревеатуре - usd, rub, uk, euro, pl) в которую вы хотите перевести ваши деньги"
    );
  } while (
    moneyConvert !== "usd" &&
    moneyConvert !== "rub" &&
    moneyConvert !== "uk" &&
    moneyConvert !== "euro" &&
    moneyConvert !== "pl"
  );

  //доллар
  if (money === "usd" && moneyConvert === "rub") {
    alert(71 * sum + " рублей");
  } else if (money === "usd" && moneyConvert === "uk") {
    alert(26 * sum + " гривен");
  } else if (money === "usd" && moneyConvert === "pl") {
    alert(4 * sum + " польський злотый");
  } else if (money === "usd" && moneyConvert === "euro") {
    alert(0.86 * sum + " евро");
  }

  //рубль
  else if (money === "rub" && moneyConvert === "usd") {
    alert(0.014 * sum + " долларов");
  } else if (money === "rub" && moneyConvert === "pl") {
    alert(0.055 * sum + " польський злотый");
  } else if (money === "rub" && moneyConvert === "euro") {
    alert(0.012 * sum + " евро");
  } else if (money === "rub" && moneyConvert === "uk") {
    alert(0.37 * sum + " гривен");
  }

  //гривна
  else if (money === "uk" && moneyConvert === "usd") {
    alert(0.038 * sum + " долларов");
  } else if (money === "uk" && moneyConvert === "pl") {
    alert(0.15 * sum + " польський злотый");
  } else if (money === "uk" && moneyConvert === "euro") {
    alert(0.033 * sum + " евро");
  } else if (money === "uk" && moneyConvert === "rub") {
    alert(2.72 * sum + " гривен");
  }

  //евро
  else if (money === "euro" && moneyConvert === "usd") {
    alert(1.16 * sum + " долларов");
  } else if (money === "euro" && moneyConvert === "pl") {
    alert(4.6 * sum + " польський злотый");
  } else if (money === "euro" && moneyConvert === "uk") {
    alert(30.54 * sum + " гривен");
  } else if (money === "euro" && moneyConvert === "rub") {
    alert(82.31 * sum + " рублей");
  }

  //злотый
  else if (money === "pl" && moneyConvert === "usd") {
    alert(0.25 * sum + " долларов");
  } else if (money === "pl" && moneyConvert === "euro") {
    alert(0.22 * sum + " евро");
  } else if (money === "pl" && moneyConvert === "uk") {
    alert(6.64 * sum + " гривен");
  } else if (money === "pl" && moneyConvert === "rub") {
    alert(18.09 * sum + " рублей");
  }

  operationAgain = confirm("Хотите снова сделать конвертацию?");
}
