function smartLily(...arg) {                        //[be black Ninja]//
    let [age, washingMachinePrice, toyPrice, toysCount, moneyFromBirthdays] = [...arg, 0, 0]
    for (let i = 1; i <= age; i++) i % 2 == 1 ? toysCount++ : (moneyFromBirthdays += 10 * i / 2, moneyFromBirthdays--)
    let money = moneyFromBirthdays + toyPrice * toysCount
    return money >= washingMachinePrice ? `Yes! ${(money - washingMachinePrice).toFixed(2)}` : `No! ${(washingMachinePrice - money).toFixed(2)}`
}

// console.log(smartLily(10, 170.00, 6))
// console.log(smartLily(21, 1570.98, 3))


//------------------------------------------------------------------------(2)--------------------------------------------



function smartLily([arg1,arg2,arg3]) {
  let age = Number(arg1);
  let washingMachinePrice = Number(arg2);
  let toyPrice = Number(arg3);

  let toysCount = 0;
  let moneyFromBirthdays = 0;

  for(let i = 1; i <= age; i ++){
      if(i % 2 == 1){
          toysCount++;
      } else {
          moneyFromBirthdays += 10 * i/2;
          moneyFromBirthdays--;
      }
  }
  let money = moneyFromBirthdays + toyPrice * toysCount;
  if(money >= washingMachinePrice){
      console.log(`Yes! ${(money - washingMachinePrice).toFixed(2)}`);
  } else {
      console.log(`No! ${(washingMachinePrice - money).toFixed(2)}`);
  }
}


// smartLily(["10","170.00","6"]);
// smartLily(["21","1570.98","3"]);
