function sumTwoNumbers(arg) {
  let [first, second, magicNum] = [+arg[0], +arg[1], +arg[2]]
  counter = 0

  for (let i = first; i <= second; i++) {
    for (let j = first; j <= second; j++) {
      counter++
      if (magicNum === i + j) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
        return
      }
    }
  }
  console.log(`${counter} combinations - neither equals ${magicNum}`);
}

//sumTwoNumbers(['1','10','5'])
//sumTwoNumbers(['88','888','1000'])
