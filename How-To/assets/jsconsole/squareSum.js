function squareSum(numbers){
  
  // Initialize sum variable
  let sum = 0;
  
  // Cube every number passed in and add it to the sum total
  numbers.forEach(number => {
    number **= 2;
    sum += number;
  })
  
  // Return the sum total
  return sum;
}