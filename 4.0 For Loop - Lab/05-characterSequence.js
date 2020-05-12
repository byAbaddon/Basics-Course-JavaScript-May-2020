function characterSequence(arg) {
  arg.match(/(\w|\W|\s{1})/gim).forEach(el => {console.log(el)});
}
//haracterSequence('ice cream')