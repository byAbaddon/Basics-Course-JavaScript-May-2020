function bakingCompetition(arg) {
  let numberOfPlayers = +arg.shift()
  let [cookiesPrice, cakesPrice, wafflesPrice] = [0, 0, 0]
  let [cookiesCount, cakesCount, wafflesCount] = [0, 0, 0]
  let countAllBakery = 0
  let priceAllBakery = 0
  let count = 0
  let command = ''

  for (let i = 0; i < numberOfPlayers; i++) {
    plyerName = arg.shift()

    while (command !== 'Stop baking!') {

      if (command === 'cookies') {
        cookiesCount += count
        cookiesPrice += 1.50 * count
      } else if (command === 'cakes') {
        cakesCount += count
        cakesPrice += 7.80 * count
      } else if (command === 'waffles') {
        wafflesCount += count
        wafflesPrice += 2.30 * count
      }

      countAllBakery += count
      command = arg.shift()
      count = 0
      if (command === 'Stop baking!') {
        console.log(`${plyerName} baked ${cookiesCount} cookies, ${cakesCount} cakes and ${wafflesCount} waffles.`);
        command = ''
        cookiesCount = 0
        cakesCount = 0
        wafflesCount = 0
        break
      }

      count = +arg.shift()
    }

  }
  priceAllBakery += cookiesPrice + cakesPrice + wafflesPrice
  console.log(`All bakery sold: ${countAllBakery}\nTotal sum for charity: ${priceAllBakery.toFixed(2)} lv.`);

}

//bakingCompetition(['3', "Iva" ,"cookies", '5', "cakes", '3', "Stop baking!", "George", "cakes", '7', "waffles", '2', "Stop baking!", "Ivan", "cookies", '6', "Stop baking!"]);
//bakingCompetition(['2', "Annie", "cakes", '3', "waffles", '6', "cookies", '2', "Stop baking!", "Petya", "waffles", '8', "Stop baking!"]);
//bakingCompetition([ '3' , 'George', 'cookies', '10', 'Stop baking!', 'Annie', 'waffles', '8', 'Stop baking!', 'Ivan', 'cookies', '6', 'waffles', '3', 'Stop baking!' ]);
