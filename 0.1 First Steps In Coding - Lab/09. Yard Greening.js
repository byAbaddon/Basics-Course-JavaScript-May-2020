function yardGreening(arg) {
  let price = arg * 7.61 * 0.82
  let discount = arg * 7.61 * 0.18
  console.log(`The final price is: ${price.toFixed(2)} lv.\nThe discount is: ${discount.toFixed(2)} lv.`);
}

//yardGreening(550)