import { input } from './input.ts';

// Split the input into an array of pairs
// each pair being an array of 4 numbers
const pairs = input
    // Split the input into an array of strings
    // one string per pair
    .split('\n')
    .map((pair) =>
        // Split each pair string into an array of two strings
        pair.split(',').flatMap((range) =>
            // Split each range string into an array of two numbers
            range
                .split('-')
                // Convert the strings to numbers
                .map((digit) => +digit)
        )
    );

// Initialize a counter to 0
let count = 0;

// Loop through each pair
pairs.forEach((pr) => {
    // Destructure the array of 4 numbers into 4 separate variables
    const [E1S, E1E, E2S, E2E] = pr;

    // Check if the first Elf's range fully contains the second Elf's range
    const E1_contains_E2 = E1S <= E2S && E2E <= E1E;

    // Check if the second Elf's range fully contains the first Elf's range
    const E2_contains_E1 = E2S <= E1S && E1E <= E2E;

    // If either of the above conditions are true, increment the counter
    if (E1_contains_E2 || E2_contains_E1) {
        count++;
    }
});

// Print the final count
console.log(count);
