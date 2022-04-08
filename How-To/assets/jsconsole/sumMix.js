function sumMix(x){
  
  // Initialize sum
  let sum = 0;
  
  // Convert all passed in elements to Numbers and add them to the sum
  x.forEach(element => {
    element = Number(element);
    sum += element;
  })
  
  // Return the sum
  return sum;
  
}