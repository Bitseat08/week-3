let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let concatenatedNames = '';

for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i];
  if (i < names.length - 1) {
    concatenatedNames += ' '; // Add a space between names, except for the last name
  }
}

console.log('Concatenated names:', concatenatedNames);

/////////////

let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;

console.log('Average number of letters per name:', averageLetters);

