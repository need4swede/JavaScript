function multiplesOf3or5(number){
  // Create new Array
  let numArr = [];
  // Initalize Sum
    let sum = 0;
  // Count up to the passed-in number  
    for(let i = 1; i < number; i++){
  // If the number is divisible by 3 and 5, add it to our new array
      if(i % 3 == 0 && i % 5 == 0){
        numArr.push(i);
      }
  // If the number is divisible by 3 or 5, add it to our new array
      else if(i % 3 == 0 || i % 5 == 0){
        numArr.push(i)
      }
    }
  // For every number in our array, add it to the sum
    numArr.forEach(element => {
       sum = element + sum;
    })
  // Return the sum total
    return sum
  }