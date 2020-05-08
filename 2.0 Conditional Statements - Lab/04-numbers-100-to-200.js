function number(...arg) {
 let n = +arg[0]
  
  if (n < 100 ) {
     r = 'Less than 100'
  } else if(n >= 100 && n <= 200 ) {
      r = 'Between 100 and 200'
    } else{
        r = 'Greater than 200' 
     }
  console.log(r); 
 }
 
 //number('100')
 //number('120')
 //number('200')
