function bus(arr) {
  let passengers = +arr[0]
  let busStops = +arr[1]
  let stopCounter = 1

  for (let i = 2; i <= busStops * 2; i += 2) {
    passengers -= +arr[i]
    passengers += +arr[i + 1]

    stopCounter % 2 === 0 ? passengers -= 2 : passengers += 2
    stopCounter++
  }

  console.log(`The final number of passengers is : ${passengers}`);
}

// bus(['20', '2', '10', '5', '5', '3'])
// bus(['25', '5', '14', '15', '9', '11', '10', '13', '6', '7', '10', '8', ])