function seaTrip(arg) {
  let [food, souv, hotel] = [+arg[0], +arg[1], +arg[2]] 

  let road = (420 / 100 * 7 * 1.85)
  let days = (3 * food) + (3 * souv)
  let percent = (hotel * 0.55) + hotel * 2
  let total = (road + days + percent).toFixed(2)
  console.log(`Money needed: ${total}`);
}

seaTrip(['100','50','500',])
seaTrip(['200','200','1000',])
seaTrip(['50','50','120',])