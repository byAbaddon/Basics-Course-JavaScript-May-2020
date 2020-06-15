function spaceship(arg) {
  let [width, len, hight, avr] = [+arg[0], +arg[1], +arg[2], +arg[3]]

  let rocket = width * len * hight
  let roomSize = (avr + 0.40) * 2 * 2
  let astroSp = ~~(rocket / roomSize)

  if (astroSp < 3) {
    console.log('The spacecraft is too small.');
  } else if (astroSp >= 3 && astroSp <= 10) {
    console.log(`The spacecraft holds ${astroSp} astronauts.`);
  } else {
    console.log('The spacecraft is too big.');
  }

}

// spaceship(['3.5', '4', '5', '1.70'])
// spaceship(['4.5', '4.8', '5', '1.75'])