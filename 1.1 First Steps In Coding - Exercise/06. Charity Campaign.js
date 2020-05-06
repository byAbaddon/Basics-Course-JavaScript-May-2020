function charityCampaign(...arg) {
  day = arg[0]
  man = arg[1]
  t = arg[2] * 45
  g = arg[3] * 5.80
  p = arg[4] * 3.20

  let sum = (t + g + p) * man
  let totalSum = (sum * day) * 0.875
  console.log(totalSum.toFixed(2));
}

//charityCampaign("23", "8", "14", "30", "16")
