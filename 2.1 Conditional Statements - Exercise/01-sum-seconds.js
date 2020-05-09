function sumSeconds(...arg) {
  sum = arg.reduce((a, b) => +a + +b)
  time = new Date(null)
  time.setSeconds(sum)
  console.log(time.toString().split(" ")[4].substr(4, 6))
}

// sumSeconds(35, 45, 44);
// sumSeconds(22, 7, 34);
// sumSeconds(50, 50, 49);
// sumSeconds(14, 12, 10);