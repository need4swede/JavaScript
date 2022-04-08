
// MERGES TWO ARRAYS, SORTS THEM IN ASC. ORDER, AND REMOVES ANY DUPLICATES
function mergeArraysLong(array1, array2) {
    // CREATE NEW ARRAY TO STORE COMBINED ARRAYS IN
    let newArr = [];
    // ADD ALL NUMBERS IN FIRST ARRAY TO OUR NEW ARRAY
    array1.forEach(numberInArray => {
      newArr.push(numberInArray);
    }) // ADD ALL NUMBERS IN SECOND ARRAY TO OUR NEW ARRAY
    array2.forEach(numberInArray => {
      newArr.push(numberInArray);
    }) // SORT OUR NEW ARRAY IN ASCENDING ORDER
    newArr.sort((a, b) => a - b);
    // REMOVE DUPLICATES FROM ARRAY
    newArr = [...new Set(newArr)];
    // RETURN THE RESULTING ARRAY
    return newArr;
  }

function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b) => a-b);

  /* EXPLANATION:
    [...new Set()]
    Takes an iterable input, like strings and arrays, and removes any duplicates
    
    a.concat(b)
    Takes an iterable input (a) and concats the second input (b) to (a)
    
    $.sort((a,b) => a-b)
    A method of sorting elements by ascending order
    
    [...new Set(a.concat(b))].sort((a,b) => a-b);
    Remove any duplicates from the newly concatenated (a) and (b), then sort it in ascending order 
  */

}