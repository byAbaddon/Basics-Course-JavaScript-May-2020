function racing(a, b, c) {
  let [fuel, fuelPerLoop, loop] = [+a, +b, +c]
  let round = 0
  for (let i = 1; i < +loop; i++) {
    
    fuel -= +fuelPerLoop
    fuelPerLoop += 0.1
    round++
    if (fuel <= 0) {
      break
    } 
  }

  if (fuel >= 0) {
     console.log('Congrats! You won the race!');
    
  } else {
   console.log(`You are out of fuel in round ${round}!`);
  }
}

// racing('70', '6.5', '10')
// racing('50', '4.3', '30')
