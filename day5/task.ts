import { input } from './input.ts';

// Find the index of the string 'move' in the input
const indexOfMove = input.indexOf('move');

// Split the input into two parts: crates and move data
const crates = input.slice(0, indexOfMove);
const moveData = input.slice(indexOfMove);

// Split the crates part into rows, removing empty rows
const cratesRows = crates.split('\n').filter((x) => x);

// Get the numbers of the crates from the last
// row of the crates part of the input
const cratesNum = cratesRows
    // Get the last row and remove any whitespace
    .pop()
    ?.replaceAll(' ', '')
    // Convert each character to a number
    .split('')
    .map((x) => +x)!;

// Get the letters of the crates from the first three
// rows of the crates part of the input
const crateLetters = cratesRows.map((r) =>
    // Remove any whitespace and brackets
    r
        .replaceAll('  ', ' ')
        .replaceAll('[', '')
        .replaceAll(']', '')
        // Get only the even-indexed characters (which are the letters)
        .split('')
        .filter((_x, i) => i % 2 === 0)
);

// Create an object that maps crate numbers to arrays of letters
const crateList: Record<number, string[]> = {};

// Initialize the arrays of letters for each crate number
cratesNum.forEach((num, i) => {
    crateList[num] = [];
    crateLetters.forEach((l) => {
        // Get the letter for the ith column in the row of letters
        const letter = l.at(i)?.trim();
        if (letter) {
            // Add the letter to the array for the corresponding crate
            crateList[num].unshift(letter);
        }
    });
});

// Parse the move data into an array of arrays of numbers
const moves = moveData
    // Split the move data into lines
    .split('\n')
    // Split each line into space-separated words,
    //convert to numbers, and remove any empty values
    .map((x) =>
        x
            .split(' ')
            .map((x) => +x)
            .filter((x) => x)
    );

// Loop through each move
moves.forEach(([num, from, to]) => {
    // For each move, pop the specified number of crates
    // from the "from" stack and push them to the "to" stack
    for (let i = 0; i < num; i++) {
        crateList[to].push(crateList[from].pop()!);
    }
});

// Create an empty string to store the top crate letters
let topCrates = '';

// Loop through each stack of crates
cratesNum.forEach((n) => {
    // Add the top crate letter from each stack to the string
    topCrates += crateList[n].at(-1);
});

// Print the final string of top crate letters
console.log(topCrates);
