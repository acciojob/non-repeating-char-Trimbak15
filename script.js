//your JS code here. If required.
function findFirstNonRepeatedCharacter(inputString) {
  // Create an empty object to store character frequencies
  let charFrequencies = {};

  // Iterate through each character in the input string and count its frequency
  for (let i = 0; i < inputString.length; i++) {
    let currentChar = inputString.charAt(i);
    charFrequencies[currentChar] = (charFrequencies[currentChar] || 0) + 1;
  }

  // Iterate through each character in the input string again and return the first character
  // with a frequency of 1
  for (let i = 0; i < inputString.length; i++) {
    let currentChar = inputString.charAt(i);
    if (charFrequencies[currentChar] === 1) {
      return currentChar;
    }
  }

  // If no non-repeated characters are found, return null
  return null;
}

// Prompt the user to enter a string and call the function with the input
let inputString = prompt("Enter a string:");
let firstNonRepeatedChar = findFirstNonRepeatedCharacter(inputString);

// Output the result
console.log("The first non-repeated character is: " + firstNonRepeatedChar);
