function personalTitles(...arg) {
  age = +arg[0];
  gender = arg[1];

  if (gender === "f") {
    console.log(age < 16 ? "Miss" : "Ms.");
    return;
  }
  console.log(age < 16 ? "Master" : "Mr.");
}

// personalTitles(12, "f");
// personalTitles(17, "m");

