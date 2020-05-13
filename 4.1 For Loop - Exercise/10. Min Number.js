function minNumber(arr) {
  rmEl = arr.shift()
  console.log(Math.min(...arr));
}

// minNumber(['3', '-10', '20', '-30'])