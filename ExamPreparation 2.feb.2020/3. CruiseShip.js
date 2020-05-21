function cruiseShip(arg) {
  let obj = { 'Mediterranean':{'standard cabin': 27.50,'cabin with balcony': 30.20, 'apartment': 40.50 },
           'Adriatic'     :{'standard cabin': 22.99,'cabin with balcony': 25.00, 'apartment': 34.99 },
           'Aegean'       :{'standard cabin': 23.00,'cabin with balcony': 26.60, 'apartment': 39.80 },
         }

   function holiday (a, b ,c) {
    let typeCabin = 0
      if (c > 7) {
        typeCabin = ((obj[a][b]) * 4 * c) * 0.75
      } else{
        typeCabin = ((obj[a][b]) * 4 * c)
      }
       console.log(  `Annie's holiday in the ${obj[a]= a} sea costs ${typeCabin.toFixed(2)} lv.`);
     }

   holiday (arg[0], arg[1], arg[2]) 
}

// cruiseShip(['Aegean', 'standard cabin', '10',])
// cruiseShip(['Adriatic', 'apartment', '5',])
// cruiseShip(['Mediterranean', 'cabin with balcony', '12'])