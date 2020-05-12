function sumNumbers(arg) {
  console.log('The sum of the digits is:' + arg.split('').reduce((a, b) => +a + +b));
}

//sumNumbers('1234')
//sumNumbers(0)