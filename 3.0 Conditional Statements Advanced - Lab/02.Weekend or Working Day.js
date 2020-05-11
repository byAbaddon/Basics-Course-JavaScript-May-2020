function weekendOrWorkingDay(arg) {
 let days = {'Monday': 1, 'Tuesday' : 1, 'Wednesday' : 1, 'Thursday' : 1, 'Friday' : 1, 'Saturday':2 ,'Sunday':2}
 if (days[arg] === 1) {
   console.log('Working day');
 } else if( days[arg] === 2){
   console.log('Weekend');
 } else{
   console.log('Error');
 }
}

// weekendOrWorkingDay('Monday')
// weekendOrWorkingDay('April')