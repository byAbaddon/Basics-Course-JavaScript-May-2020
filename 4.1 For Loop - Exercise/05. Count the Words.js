function countTheWords(text) {
  let result = text.split(' ').length
  console.log(result > 10 ?
    `The message is too long to be send! Has ${result} words.` :
    'The message was send successfully!');
}

//countTheWords("This message has exactly eleven words. One more as it's allowed!")