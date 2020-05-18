function building(arg) {
  [floor, rooms] = [+arg[0], +arg[1]]
  arr = []
                                              
  for (let i = 1; i <= floor; i++) {
    for (let j = rooms; j > 0; j--) {
      if (i === floor) {
        arr.push(`L${i}${j - 1}`)
        continue
      }
      if ((i & 1) === 0) {
        arr.push(`O${i}${+j - 1}`)
      } else {
        arr.push(`A${i}${+j - 1}`)
      }
    }
  }
       while (arr.length !== 0) {
        template = ''
         for (let i = 0; i < rooms; i++) {
          template += arr.pop() + ' '
         }
        console.log(template)
       }
}

//building(['6', '4'])
//building(['9', '5'])