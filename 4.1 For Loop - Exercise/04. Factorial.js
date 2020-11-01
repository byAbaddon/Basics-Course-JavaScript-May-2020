function factorial(f) {    //[be black Ninja]//
  return f == 0 ? 1 : f * factorial(f - 1)
}

// console.log(factorial('8'))

-----------------------------------------------(2)----------------------------


function factorial(n) {
  if (n == 0) {
    return 1
  }

  return n * factorial(n - 1)
}

//console.log(factorial('8'));
