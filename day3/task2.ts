import { input } from './input.ts';

// Split the input into an array of strings, one string per rucksack
const rugSacks = input.split('\n');

// Group the rucksacks into groups of 3
const groupedRugSacks: string[][][] = [];
let currentGroup: string[][] = [];
rugSacks.forEach((r, i) => {
    // Add the current rucksack to the current group
    currentGroup.push([...r]);

    // If this is the last rucksack, push the current
    // group to the final array and return
    if (i === rugSacks.length - 1) {
        groupedRugSacks.push(currentGroup);
        return;
    }

    // If this is the last rucksack in a group of 3, push the
    // current group to the final array and reset the current group
    if (i % 3 === 0 && i !== 0) {
        groupedRugSacks.push(currentGroup);
        currentGroup = [];
    }

    // Add the current rucksack to the current group
    currentGroup.push([...r]);
});

// This string defines the order of the letters,
// from lowest to highest priority
const LetterPriority = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// This variable will keep track of the total number of points
let count = 0;

// Loop through each group of 3 rucksacks
groupedRugSacks.forEach((gr) => {
    // Find the items that are common to all 3 rucksacks in the group
    const common = gr[0].filter((x) => gr[1].includes(x) && gr[2].includes(x));

    // Add the priority of the first common item to the total count
    count += LetterPriority.indexOf(common[0] ?? '');
});

// Print the final count
console.log(count);
