
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

//---------------------------------(2)-------------FUCKING JUDGE------------------------------
//------------------------------------------wrong conditions------------input :  cleverLily('10', '170', '6') 
// function cleverLily(a, b, c) {
//   let age = +a
//   let priceWM = +b
//   let toysPrice = +c
//   let moneyEven = 0;
//   let moneyOdd = 0;
//   let evenYears = 0;

//   for (let i = 1; i <= age; i++) {
//     if (i % 2 == 0) {
//       evenYears++;
//       moneyEven += (10 * evenYears) - 1;
//     } else {
//       moneyOdd += toysPrice;
//     }
//   }

//   if (moneyEven + moneyOdd >= priceWM) {
    
//     console.log(`Yes! ${Math.abs(moneyOdd + moneyEven - priceWM).toFixed(2)}`);
//   } else {
//     console.log(`No! ${Math.abs(moneyOdd + moneyEven - priceWM).toFixed(2)}`);
//   }
// }

// cleverLily(10, 170, 6)
// cleverLily('10', '170', '6')
// cleverLily('21', '1570.98', '3')

//----------------(3)-------------FUCKING JUDGE------------------------------

// function cleverLily(a, b, c) {
//   let age = Number(a)
//   let laundryPrice = Number(b)
//   let toysPrice = Number(c)
//   let moneyCount = 0;
//   let toysCount = 0;
//   let brotherReket = 0;

//   for (let i = 1; i <= age; i++) {
//     if ((i & 1) === 0) {
//       moneyCount += (10 * i);
//       brotherReket++;
//     } else {
//       toysCount++;
//     }
//   }
//   toysCount *= toysPrice;

//   let subtotal = (toysCount + (moneyCount / 2)) - brotherReket;
//   let total = Math.abs(subtotal - laundryPrice);

//   if (subtotal >= laundryPrice) {
//     console.log(`Yes! ${(total.toFixed(2))}`);

//   } else {
//     console.log(`No! ${(total.toFixed(2))}`);
//   }
// }

// cleverLily('10', '170' ,'6') 
// cleverLily('21', '1570.98' ,'3') 