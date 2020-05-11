function hotelRoom(...arg) {
  let [month, days] = [...arg]
  let priceStudio = 50;
  let priceApartment = 65;

  switch (month) {
    case 'May':
    case 'October':
      priceStudio = 50 * days;
      priceApartment = 65 * days;

      if (days > 14) {
        priceStudio *= 0.70;
        priceApartment *= 0.90;
      } else if (days > 7) {
        priceStudio *= 0.95;
      }
      break;

    case 'June':
    case 'September':
      priceStudio = 75.20 * days;
      priceApartment = 68.70 * days;

      if (days > 14) {
        priceStudio *= 0.80;
        priceApartment *= 0.90;
      }
      break;

    case 'July':
    case 'August':
      priceStudio = 76.00 * days;
      priceApartment = 77.00 * days;
      if (days > 14) {
        priceApartment *= 0.90;
      };
      break;
  }
  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.\nStudio: ${priceStudio.toFixed(2)} lv.`);
}

//hotelRoom('May', 15)
