function fruitMarket(y, b, kgO, kgR, kgY) {
  let raspberries = y / 2
  let oranges = raspberries * 0.60
  let bananas = raspberries * 0.20

  let sumKgR = kgR * raspberries
  let semKgO = kgO * oranges
  let semKgB = b * bananas
  let semKgY = kgY * y
  
  console.log(sumKgR + semKgO + semKgB  + semKgY );
}

// fruitMarket("48", "10", "3.3", "6.5", "1.7")
// fruitMarket("63.5","3.57","6.35","8.15","2.5")