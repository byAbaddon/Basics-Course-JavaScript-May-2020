function animalType(arg) {
  let result = ' '
  let reptile = ["snake", "tortoise", "crocodile"]

  if (arg === 'dog') {
    result = 'mammal'
  } else if (reptile.includes(arg)) {
    result = 'reptile'
  } else {
    result = 'unknown'
  }

  console.log(result);
}

// animalType("dog");
// animalType("tortoise");
// animalType("snake");
