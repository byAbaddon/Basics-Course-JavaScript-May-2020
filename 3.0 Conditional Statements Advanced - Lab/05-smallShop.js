function smallShop(...arg) {
  const [city, drink, count] = [arg[1] , arg[0], +arg[2]]
  let order = { 
  'Sofia':{'coffee' : 0.50 , 'water' : 0.80, 'beer':1.20, 'sweets': 1.45, 'peanuts': 1.60}, 
  'Plovdiv':{'coffee' : 0.40 , 'water' : 0.70, 'beer':1.15, 'sweets': 1.30, 'peanuts': 1.50}, 
  'Varna':{'coffee' : 0.45 , 'water' : 0.70, 'beer':1.10, 'sweets': 1.35, 'peanuts': 1.55}, 
}
 console.log(order[city][drink] * count)

}

//smallShop('coffee','Varna', 2) 