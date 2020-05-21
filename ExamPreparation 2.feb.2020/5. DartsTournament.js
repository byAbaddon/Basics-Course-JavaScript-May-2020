function dartsTournament(arg) {
  let points = arg[0];
  let counter = 1
 

  for (let i = 1; i < arg.length; i++) {
 
   
    switch (arg[i]) {
      case "number section":
        counter++
        points -= arg[i+1]
        break;
     case "double ring":
        counter++
         points -= (arg[i+1] * 2)
        break;
     case "triple ring":
       counter++
        points -= (arg[i+1] * 3)
         break;
     case "bullseye": 
        counter++
        console.log(`Congratulations! You won the game with a bullseye in ${counter - 1} moves!` );
       return
    }
      
      if (points === 0) {
        console.log(`Congratulations! You won the game in ${counter -1} moves!`);
          return;
      } else if(points < 0){
        console.log(`Sorry, you lost. Score difference: ${Math.abs(points)}.`);
        return
      }
       
  }
}

// dartsTournament([150, "double ring", 20, "triple ring", 10, "number section", 20, "triple ring", 20]);
// dartsTournament([101, "triple ring", 7, "double ring", 19, "bullseye"]);
// dartsTournament([75, "triple ring", 17, "number section", 16, "triple ring", 13, "double ring", 10]);