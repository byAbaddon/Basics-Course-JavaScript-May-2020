function characterSequence(arg) {
  [str, sum] = [arg, 0]
  map = new Map([['a', 1], ['e', 2], ['i', 3], ['o', 4], ['u', 5]])
  Array.from(str).forEach(el => map.has(el) ? sum+= map.get(el) : null);
  console.log(sum);
}

//characterSequence('hello')
