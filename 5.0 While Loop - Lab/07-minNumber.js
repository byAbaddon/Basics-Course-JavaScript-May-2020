function minNumber(arg) {
  rmFirstEl = arg.pop()
  console.log(Math.min(...arg));
}

//minNumber(["100", "99", "80", "70", "Stop"]) 