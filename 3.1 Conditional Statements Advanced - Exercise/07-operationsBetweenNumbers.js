function operationsBetweenNumbers(...arg) {
  let [x, y, operator] = [...arg];
  let result = 0
  let sum = eval(x + operator + y);

  if (sum === Infinity || sum !== sum) {
    console.log(`Cannot divide ${x} by zero`);
  } else if (operator === "/") {
    sum = sum.toFixed(2);
    console.log(`${x} ${operator} ${y} = ${sum}`);
  } else if (operator === "%") {
    console.log(`${x} ${operator} ${y} = ${sum}`);
  } else {
    result = (sum & 1) === 0 ? "even" : "odd";
    console.log(`${x} ${operator} ${y} = ${sum} - ${result}`);
  }
}

// operationsBetweenNumbers(10, 12, '+')
// operationsBetweenNumbers(10, 0, "%");