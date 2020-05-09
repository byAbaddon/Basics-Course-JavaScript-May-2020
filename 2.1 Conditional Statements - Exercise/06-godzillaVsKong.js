function Godzilla(...arg) {
  let [budget, statists, clothes] = [+arg[0], +arg[1], +arg[2]]
  let decors = budget / 10
  let clothesSum = statists * clothes

  statists > 150 ? clothesSum -= (clothesSum / 10) : null
  budget -= (decors + clothesSum)

  if (budget >= 0) {
    console.log(`Action!\nWingard starts filming with ${budget.toFixed(2)} leva left.`)
    return
  }
  console.log(`Not enough money!\nWingard needs ${Math.abs(budget).toFixed(2)} leva more.`);
}

// Godzilla(20000, 120, 55.5)
// Godzilla(9587.88, 222, 55.68)