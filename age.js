let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Find the first and last elements using array methods
let firstElement = ages.shift(); 
let lastElement = ages.pop();

// Calculate the difference between the first and last elements
let result = lastElement - firstElement;

console.log("Result:", result);
///////////////////////////////////////

/*let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let firstElement = ages.shift(); // Remove and get the first element
let lastElement = ages.pop(); // Remove and get the last element


let result = lastElement - firstElement;

console.log("Result (before adding a new age):", result);

// Add a new age to the array
let newAge = 30;
ages.push(newAge);

// Find the first and last elements again
firstElement = ages[0]; // Get the new first element
lastElement = ages[ages.length - 1]; // Get the new last element

// Calculate the difference between the new first and last elements
result = lastElement - firstElement;

console.log("Result (after adding a new age):", result);*/

//////////////////////////////////////////

/*let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

let average = sum / ages.length;

console.log("Average age:", average);*/

