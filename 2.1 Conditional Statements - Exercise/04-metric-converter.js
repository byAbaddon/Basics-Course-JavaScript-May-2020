function metricConverter(...arg) {
  let n = +arg[0]
 
  switch (arg[1]) {
    case 'mm': n /= 1000; break;
    case 'cm': n /= 100; break;
    case 'm': n /= 1; break;

    default:
  }

  switch (arg[2]) {
    case 'mm': n *= 1000; break;
    case 'cm': n *= 100; break;
    case 'm': n *= 1; break;
  
    default: throw console.log('error');
  }

  console.log(n.toFixed(3));
 }
 
 //metricConverter(12, 'mm',  'm')
