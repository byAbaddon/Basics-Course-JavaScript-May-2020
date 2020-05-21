function cruiseGames(arg) {
   let name = arg[0];
   let game = arg[1]
   let volleyballPoints = 0
   let volleyballGames = 0
   let tennisPoints = 0
   let tennisGames = 0
   let badmintonPoints = 0
   let badmintonGames = 0

   for (let i = 2; i < arg.length; i++) {

      switch (arg[i]) {
         case 'volleyball':
            volleyballPoints += (arg[i + 1] * 107 / 100)
            volleyballGames++
            break;
         case 'tennis':
            tennisPoints += (arg[i + 1] * 105 / 100)
            tennisGames++
            break;
         case 'badminton':
            badmintonPoints += (arg[i + 1] * 102 / 100)
            badmintonGames++
            break;
      }

   }
   let calcAllPoints = volleyballPoints + tennisPoints + badmintonPoints

   if (volleyballPoints / volleyballGames >= 75 && tennisPoints / tennisGames >= 75 && badmintonPoints / badmintonGames >= 75) {
      console.log(`Congratulations, ${name}! You won the cruise games with ${~~calcAllPoints} points.`);
   } else {
      console.log(`Sorry, ${name}, you lost. Your points are only ${~~calcAllPoints}.`);
   }

}

//cruiseGames(['Pepi', '3', 'volleyball', '78', 'tennis', '98', 'badminton', '105', ])
// cruiseGames(['Annie', '5', 'badminton', '34', 'tennis', '76', 'badminton', '10', 'volleyball', '62', 'badminton', '56' ])
// cruiseGames(['Ivan', '7', 'volleyball', '70', 'tennis', '100', 'badminton', '64', 'volleyball', '125', 'tennis', '62', 'tennis', '72', 'badminton', '87' ])