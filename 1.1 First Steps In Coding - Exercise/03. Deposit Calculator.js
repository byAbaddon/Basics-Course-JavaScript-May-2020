function depositCalculator(sum, period, percent) {
  let interest = +sum * +percent / 100
  let interestByMonth = interest / 12
  console.log(+sum + +period * interestByMonth);
}

//depositCalculator('200', '3', '5.7') //correct output: 202.85


//---(2)-------------FUCKING JUDGE-----------FUCKING JUDGE--------------FUCKING JUDGE-----

// function depositCalculator(sum, period, percent) {
//   let interest = sum * percent / 100
//   let interestByMonth = interest / 12 
//   console.log(sum + period * interestByMonth);
// }

// depositCalculator(200, 3, 5.7) //correct output: 202.85
// depositCalculator(2350, 6, 7) //correct output: 2432.25