/*BMI (Body Mass Index)
 * @param {number} weightInKg -  weight of the person in kg.
 * @param {number} heightInM - Theight of the person in m.
 * @returns {number} - The calculated BMI.*/

function calculateBMI(weightInKg, heightInM) {
    // weight and height are positive numbers
    if (weightInKg <= 0 || heightInM <= 0) {
      throw new Error("Weight and height must be positive numbers.");
    }
  
    // the formula to calculate bmi:
    const bmi = weightInKg / (heightInM * heightInM);
  
    
    return bmi;
  }
  
  // Example :
  const weight = 70; // 70 kilograms
  const height = 1.75; // 1.75 meters
  const bmiResult = calculateBMI(weight, height);
  console.log(`BMI: ${bmiResult.toFixed(2)}`);
  


