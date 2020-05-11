function cinema(...arg) {
  let [type, row, col] = [...arg]
  let projectionType = { Premiere: 12.0, Normal: 7.5, Discount: 5.0 };
  console.log((projectionType[type] * row * col).toFixed(2) + " leva");
}

//cinema("Premiere", 10, 12);
