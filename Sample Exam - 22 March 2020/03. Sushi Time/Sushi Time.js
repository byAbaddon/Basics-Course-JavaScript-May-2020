function sushiTime(arg) {
  let [restaurant, type,  count, symbol] = [arg[0], arg[1], +arg[2], arg[3]]

  let existingRestaurants = ['Sushi Zone', 'Sushi Time', 'Sushi Bar','Asian Pub']
  let objRes = {
         sashimi : {'Sushi Zone' : 4.99, 'Sushi Time' : 5.49, 'Sushi Bar' : 5.25, 'Asian Pub' : 4.50},
         maki : {'Sushi Zone' : 5.29, 'Sushi Time' : 4.64, 'Sushi Bar' : 5.55, 'Asian Pub' : 4.80},
         uramaki : {'Sushi Zone' : 5.99, 'Sushi Time' : 4.49, 'Sushi Bar' : 6.25, 'Asian Pub' : 5.50},
         temaki : {'Sushi Zone' : 4.29, 'Sushi Time' : 5.19, 'Sushi Bar' : 4.75, 'Asian Pub' : 5.50},
  }

  if (!existingRestaurants.includes(type)) {
    console.log(`${type} is invalid restaurant!`);
    return
  }
   
    let subtotal = objRes[restaurant][type] * count
    let total = symbol === 'Y' ? subtotal * 1.20  : subtotal

  console.log(`Total price: ${Math.ceil(total)} lv.`);
}

// sushiTime(['maki', 'Sushi Zone', '4', 'Y',])
// sushiTime(['sashimi', 'SASA', '3', 'Y',])

  