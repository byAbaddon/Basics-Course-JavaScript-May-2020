function vacation(arg) {
  holidayPrice = +arg[0]
  budget = +arg[1]
  countSpend = 0
  countSave = 0

  for (let i = 2; i < arg.length; i++) {
    if (arg[i] === 'spend') {
      budget -= +arg[i + 1]
      budget < 0 ? budget = 0 : null
      countSpend++
    }

    if (arg[i] === 'save') {
      budget += +arg[i + 1]
      countSave++
    }
  }

  days = Math.abs(countSave + countSpend)

  console.log(budget < holidayPrice ?
    `You can't save the money.\n${days}` :
    `You saved the money for ${days} days.`
  );
}

//vacation([  '2000',  '1000', 'spend', '1200', 'save', '2000',])
//vacation(['110','60','spend','10','spend','10','spend','10','spend','10','spend','10'])
