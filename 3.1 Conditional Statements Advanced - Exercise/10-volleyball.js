function volleyball(...arg) {
  [typeYear, holidayWeekend, simpleWeekend] = [arg[0], +arg[1], +arg[2]]
   weekend = (48 - simpleWeekend) * 3 / 4 
   holiday = (holidayWeekend * 2.0) / 3
   allGames = weekend + holiday + simpleWeekend

  console.log( typeYear === 'leap' ?  Math.floor(allGames * 115 / 100) : Math.floor(allGames))
  }

// volleyball('leap', 5, 2 )
// volleyball('noraml', 6, 13)
