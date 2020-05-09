//Bug №2 Zero Unitest  but got 100pt
function scholarship(...arg) {
  let [income, grade, minSalary] = [+arg[0], +arg[1], +arg[2]]
    let stipendia = minSalary * 0.35
    let excellentSitpemdia = grade * 25    
  if (income < minSalary && grade > 4.5 && grade < 5.5 ) {
      console.log(`You get a Social scholarship ${Math.floor(stipendia)} BGN`)
  } else if (grade >= 5.5) {
      console.log(`You get a scholarship for excellent results ${Math.floor(excellentSitpemdia)} BGN`)
  } else {
      console.log("You cannot get a scholarship!")
  }
}

//scholarship( '480.00','4.60', '450.00')  //141 BGN Not mast be 141
//scholarship( '300.00','5.65', '420.00')



