function onTimeForTheExam(...arg) {
  // Get input
  let [exHours, exMin, arHours, arMin] = [+arg[0], +arg[1], +arg[2], +arg[3]]
  // Set some constants.
  const [late, onTime, early] = ["Late", "On time", "Early"]

  // Calculate all differences in minutes.
  let examTime = (exHours * 60) + exMin;
  let arrivalTime = (arHours * 60) + arMin;
  let totalMinutesDifference = arrivalTime - examTime;

  // Check when the student had arrived for the exam and display the result
  let studentArrival = late;
  if (totalMinutesDifference < -30) {
    studentArrival = early;
  } else if (totalMinutesDifference <= 0) {
    studentArrival = onTime;
  }

  // Check and output final result.
  let result = ''
  if (totalMinutesDifference !== 0) {
    let hoursDifference = Math.abs(~~(totalMinutesDifference / 60)); //~~ analog Math.floor but more fast
    let minutesDifference = Math.abs(totalMinutesDifference % 60);

    if (hoursDifference > 0) {
      result = hoursDifference + ":" + (minutesDifference > 9 ? minutesDifference : "0" + minutesDifference) + " hours";
    } else {
      result = minutesDifference + " minutes";
    }

    if (totalMinutesDifference < 0) {
      result += " before the start";
    } else {
      result += " after the start";
    }
  }

  // Output the result
  console.log(studentArrival);
  if (result) { console.log(result); }
}

// onTimeForTheExam(14, 00, 13, 55);
// onTimeForTheExam(11, 30, 8, 12);
// onTimeForTheExam(10, 00, 10, 00);
// onTimeForTheExam(11, 30, 10, 55);
// onTimeForTheExam(11, 30, 12, 29);


 

