import { input } from './input.ts';
// const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb` as const;

// const inputList = input.split('');
// const buffer = 7;
// for (let i = 0; i < inputList.length; i++) {
//     const subset = inputList.slice(i, i + buffer);
//     const isUnique = new Set(subset).size === buffer;
//     if (isUnique) {
//         console.log(i + buffer);
//         break;
//     }
// }

// Split the input string into an array of characters
const inputList = input.split('');

// Set a buffer size to check for unique substrings
const buffer = 4;

// Loop through each character in the input array
for (let i = 0; i < inputList.length; i++) {
    // Get a subset of the input array starting at the current character and extending for the length of the buffer
    const subset = inputList.slice(i, i + buffer);

    // Check if the subset has any duplicate characters by converting it to a set and checking its size
    const isUnique = new Set(subset).size === buffer;

    // If the subset is unique, print the end index of the subset (i + buffer) and break out of the loop
    if (isUnique) {
        console.log(i + buffer);
        break;
    }
}

// The code takes a string as input and splits it into an array of individual characters. It then loops through each character and creates a subset of the input array that starts at the current character and ends at the current character plus a fixed buffer length of 14.

// For each subset, it checks if all the characters in the subset are unique. If so, it logs the index of the last character in the subset plus the buffer length, and then breaks out of the loop.
