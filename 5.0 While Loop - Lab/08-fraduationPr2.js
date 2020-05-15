function graduationTwo(arg) { 
  name = arg.shift()
  grade = 0
  countClass = 1
    for (let i = 0; i <= arg.length; i++) {
       if (arg[i] >= 4.00) {
        grade+= Number(arg[i])
        countClass++
       } else if(arg[i] === '2'){
            console.log(`${name} has been excluded at ${countClass} grade`);
            return   
       }
    }
                       
  console.log(`${name} graduated. Average grade: ${(grade / 12).toFixed(2)}`);
}
  //graduationTwo(['Gosho', '5', '5.5', '6', '5.43', '5.5', '6', '5.55', '5', '6', '6','5.43', '5' ])
  //graduationTwo(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3' ])