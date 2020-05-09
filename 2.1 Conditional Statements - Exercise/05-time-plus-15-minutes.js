function timeAddMinutes(...arg) {
  let [hour, min, start, end] = [+arg[0], +arg[1], 0, 5]
  time = new Date(0, 0, 0, hour, min + 15)
  time.getHours() < 10 ? ++start && --end: null 
  console.log(time.toString().split(' ')[4].substr(start, end)); 
}

//timeAddMinutes(11, 08)
