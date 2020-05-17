function cake(arg) {
  birthdayCake = arg.shift() * arg.shift()
  pieces = arg.filter(el => Number(el)).reduce((a, b) => +a + +b)
  total = Math.abs(birthdayCake - pieces)
  console.log(birthdayCake > pieces ? `${total} pieces are left.` : `No more cake left! You need ${total} pieces more.`);
}

//cake(['10', '10', '20', '20', '20', '20', '21'])
//cake(['10', '2', '2', '4', '6', 'STOP'])