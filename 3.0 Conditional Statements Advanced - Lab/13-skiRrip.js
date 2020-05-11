function skiTrip(...arg) {
  let [day, room, grade] = [+arg[0] - 1, arg[1], arg[2]];
  let result = 0;
  const pricePerNight = {"room for one person": 18.0, "apartment" : 25.0, "president apartment": 35.0};

  switch (true) {
    case day < 10:
      if (room === 'room for one person') {
        result = day * pricePerNight[room]; 
      } else if(room === 'apartment'){
        result = day * pricePerNight[room]
        result-= result * 30 / 100
      }else{
        result = day * pricePerNight[room]
        result-= result * 10 / 100
      }
     break;
    case day >= 10 && day <= 15:
      if (room === 'room for one person') {
        result = day * pricePerNight[room]; 
      } else if(room === 'apartment'){
        result = day * pricePerNight[room]
        result-= result * 35 / 100
      }else{
        result = day * pricePerNight[room]
        result-= result * 15 / 100
      }
        break;
        case day > 15:
          if (room === 'room for one person') {
            result = day * pricePerNight[room]; 
          } else if(room === 'apartment'){
            result = day * pricePerNight[room]
            result-= result * 50 / 100
          }else{
            result = day * pricePerNight[room]
            result-= result * 20 / 100
          }
            break;
  }

  console.log(grade === 'positive' ? (result * 125 / 100).toFixed(2) : (result * 0.90).toFixed(2));
}

//skiTrip(30, "president apartment", "negative"); 

