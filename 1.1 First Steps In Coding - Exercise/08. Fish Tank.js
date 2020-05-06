function fishTank(...arg) {
  let size = (arg[0] * arg[1] * arg[2]) * 0.001
  let lt = arg[3] * 0.01
  console.log((size * (1 - lt)).toFixed(3));
}

//fishTank("105","77","89","18.5")
