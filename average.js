function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // Return 0 for an empty array to avoid division by zero
    }
  
    let sum = 0;
  
    // Calculate the sum of all numbers in the array
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    // Calculate the average
    let average = sum / numbers.length;
  
    return average;
  }
  
  // Example :
  let numbersArray = [10, 20, 30, 40, 50];
  let result = calculateAverage(numbersArray);
  console.log(result); // This will print the average, which is 30 


