function speedInfo(arg) {
 let n = +arg

  switch (true) {
    case n <= 10 : result = 'slow'; break;
    case n > 10 && n <= 50 : result = 'average'; break;
    case n > 50 && n <= 150 : result = 'fast'; break;
    case n > 150 && n <= 1000 : result = 'ultra fast'; break;
    case n > 1000 : result = 'extremely fast'; break;
  } 
  console.log(result); 
}

//speedInfo(1360)
