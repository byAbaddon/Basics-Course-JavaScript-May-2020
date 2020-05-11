function summerOutfit(...arg) {
 let [degrees, dayTime, result] = [+arg[0], arg[1], ''] //undefined
 const obj = { 
               m: {Morning:'Sweatshirt and Sneakers', Afternoon: 'Shirt and Moccasins', Evening: 'Shirt and Moccasins'},      
               a: {Morning:'Shirt and Moccasins',     Afternoon: 'T-Shirt and Sandals', Evening: 'Shirt and Moccasins'},          
               e: {Morning:'T-Shirt and Sandals',     Afternoon: 'Swim Suit and Barefoot', Evening: 'Shirt and Moccasins'},   
            }

  switch (true) {
    case degrees >= 10 && degrees <= 18:
      if (dayTime === 'Morning') {
        result = obj.m[dayTime]  
      }else if(dayTime === 'Afternoon'){
        result = obj.m[dayTime]
      } else{
        result = obj.m[dayTime]
      }
       break;
    case degrees > 18 && degrees <= 24:
        if (dayTime === 'Morning') {
          result = obj.a[dayTime]  
        }else if(dayTime === 'Afternoon'){
          result = obj.a[dayTime]
        } else{
          result = obj.a[dayTime]
        }
         break;
     case degrees >= 25:
          if (dayTime === 'Morning') {
            result = obj.e[dayTime]  
          }else if(dayTime === 'Afternoon'){
            result = obj.e[dayTime]
          } else{
            result = obj.e[dayTime]
          }
           break;
  }
  
  console.log(`It's ${degrees} degrees, get your ${result}.`);
}

//summerOutfit(16, 'Morning')
//summerOutfit(16, 'Afternoon')
//summerOutfit(22, 'Afternoon')
//summerOutfit(28, 'Evening')
