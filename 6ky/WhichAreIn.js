// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []
// Notes:
//     Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//     In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//     Beware: r must be without duplicates.

Array;function inArray(array1,array2){
    //...
    let newArray = [];
    array1.sort();
    
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array2[j].indexOf(array1[i]) !== -1) {
          newArray.push(array1[i]);
          break;
        }
      }
    } 
    return newArray;
}

//This is my first time using a nested array. Super cool