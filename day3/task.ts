import { input } from './input.ts';

// Split the input into an array of strings,one string per rucksack
const rugSacks = input.split('\n');

// This string defines the order of
// the letters, from lowest to highest priority
const LetterPriority = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// This variable will keep track of the total number of points
let count = 0;

// Loop through each rucksack
rugSacks.forEach(([...items]) => {
    // Split the items into two arrays, the first half and the second half
    let first = items.slice(0, items.length / 2);
    let last = items.slice(items.length / 2, items.length);

    // Keep track of items that have already been counted
    let blackList = new Set<string>();

    // Loop through each item in the first half of the rucksack
    first.forEach((f) => {
        // If the item hasn't been counted yet...
        if (!blackList.has(f)) {
            // Add the priority of the matching item in the
            // second half of the rucksack to the total count
            count += LetterPriority.indexOf(last.find((l) => l === f) ?? '');

            // Mark the item as counted
            blackList.add(f);
        }
    });
});

// Print the final count
console.log(count);
