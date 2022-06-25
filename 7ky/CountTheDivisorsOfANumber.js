// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.
// Examples (input --> output)

// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    // todo
  let count = 1 ;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  } 
  return count;

    
    //number divides n % 0
    //then add that to count++
    //return count
}

//See the notes at the bottom of my work
//I'm trying to note out what I do and htink more before I begin solving a program
