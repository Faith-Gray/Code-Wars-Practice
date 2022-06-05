// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

//firstly I'm going to sort the array in order then I'm going to sum the array using index 1 and and index of array.length - 2
let array = [null]


//my attempt

function sumArray(array) {
    if (array === null) {
      return 0
    } else if (array.length <= 3) {
      return 0
    } else {
    array.sort();
    let removeFirstNum = array.splice(0, 1);
    let removeLastNum = removeFirstNum.splce(array.length - 1, 1);
    return removeLastNum.reduce((previousValue, currentValue) => previousValue + currentValue,
      initialValue
    )};
}

//accepted answer

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
}

// I should have gathered a better understanding of sort(); and reduce(); before writing my code. Ulitmately this could still be solved via splice but I like the loop better.
