// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
 let num = 0;
  
  for (let i = 0; i < x.length; i++) {
  if (typeof x[i] === 'string') {
    num -= x[i]
  } else {
    num += x[i]
  }
} 
      return num;

}
