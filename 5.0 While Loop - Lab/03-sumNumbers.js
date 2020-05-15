function sumNumbers(arg) {
  let num = +arg.shift()
  let sum = 0

  for (let i = 0; i < arg.length; i++) {
    sum += +arg[i]
    if (sum >= num) {
      console.log(sum);
      return
    }
  }
}

//sumNumbers(["100", "10", "20", "30", "40"])