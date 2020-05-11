function tradeCommissions(...arg) {
 let [city, money] = [arg[0], arg[1]];
 const arr = ["Sofia", "Varna", "Plovdiv"];
 let result = 0;
 let obj = {
    Sofia: { s: 5, m: 7, l: 8, xl: 12 },
    Varna: { s: 4.5, m: 7.5, l: 10, xl: 13 },
    Plovdiv: { s: 5.5, m: 8, l: 12, xl: 14.5 }
  };

  if (!arr.includes(city) || money < 0) {
    console.log("error");
    return;
  }

  switch (true) {
    case money <= 500:
      result = (obj[city].s * money) / 100;
      break;
    case money > 500 && money <= 1000:
      result = (obj[city].m * money) / 100;
      break;
    case money > 1000 && money <= 10000:
      result = (obj[city].l * money) / 100;
      break;
    case money > 10000:
      result = (obj[city].xl * money) / 100;
      break;
  }

  console.log(result.toFixed(2));
}

//tradeCommissions("Varna", 3874.50);
