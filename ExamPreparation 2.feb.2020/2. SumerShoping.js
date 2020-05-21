function summerShopping(arg) {
  let [budget, bathrobe, discount ] = [+arg[0], +arg[1] , +arg[2]]
  let umbrella = (bathrobe / 3) * 2 //10
  let flipFlops = (umbrella * 0.75).toFixed(2) //7.50
  let beachBag =  ((+bathrobe + +flipFlops) / 3).toFixed(2) //7.50
  let subtotalSum =  +bathrobe + +umbrella + +flipFlops  + +beachBag  //40
 
  let  totalSum =  (subtotalSum - (subtotalSum * discount /100)).toFixed(2)
  let  all = (budget - totalSum).toFixed(2)
   
   
   if (all >= 0) {
      console.log(`Annie's sum is ${totalSum} lv. She has ${all} lv. left.`)
   }else{
      console.log(`Annie's sum is ${totalSum} lv. She needs ${Math.abs(all).toFixed(2)} lv. more.`)
   }
  
 }

// summerShopping(['40', '15', '5']);
// summerShopping(['25', '6', '10']);
// summerShopping(['30', '17', '3']);
