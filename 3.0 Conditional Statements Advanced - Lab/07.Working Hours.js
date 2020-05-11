function workingHours(hours, day) {
   if ( +hours >= 10 && +hours <= 18 && day !== 'Sunday'){
     console.log('open');   
   } else{
     console.log('closed');
     
   }
}

// workingHours('11', 'Monday')
// workingHours('11', 'Sunday')