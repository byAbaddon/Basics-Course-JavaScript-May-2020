function bachelorParty(inputArr) {
  let arr = [...inputArr]
  let singer = +arr.shift()
  let guests = 0
  let money = 0

  let element = +arr.shift();

  while (element !== "The restaurant is full") {

    guests += +element

    if (element < 5) {
      money += element * 100;
    } else {
      money += element * 70;
    }

    element = arr.shift()
  }

  if (money >= singer) {
    console.log(`You have ${guests} guests and ${money - singer} leva left.`);
  } else {
    console.log(`You have ${guests} guests and ${money} leva income, but no singer.`);
  }
}


bachelorParty(['2800', '5', '5', '4', '6', '6', '12', '12', 'The restaurant is full', ])

//bachelorParty([ '3200', '5', '12', '6', '6', '12', 'The restaurant is full' ])

//bachelorParty([ '1800', '4', '4', '4', '4', '6', '6', 'The restaurant is full'])