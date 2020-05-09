function swimmingRecord(...arg) {
  let [record, trace, metersMin] = [+arg[0], +arg[1], +arg[2]]

  let swimmingTrace = trace * metersMin
  let addSeconds = Math.floor(trace / 15) * 12.5
  let time = swimmingTrace + addSeconds

  if (time >= record) {
    time = Math.abs(record - time)
    console.log(`No, he failed! He was ${time.toFixed(2)} seconds slower.`);
  } else {
    console.log(`Yes, he succeeded! The new world record is ${(time).toFixed(2)} seconds.`)
  }
}

// swimmingRecord('10464', '1500', '20')
// swimmingRecord( '55555.67', '3017', '5.03')