import { input } from './input.ts';

const pairs = input
    .split('\n')
    .map((pair) =>
        pair
            .split(',')
            .flatMap((range) =>
                range.split('-').map((digit) => +digit)
            )
    );

let count = 0;
pairs.forEach((pr) => {
    // Destructure the array of 4
    // numbers into 4 separate variables
    const [_1S, _1E, _2S, _2E] = pr;

    // Check if the start of the first
    // range is inside the second range
    const s1_2 = _2S <= _1S && _1S <= _2E;

    // Check if the end of the first
    // range is inside the second range
    const e1_2 = _2S <= _1E && _1E <= _2E;

    // Check if the start of the second
    // range is inside the first range
    const s2_1 = _1S <= _2S && _2S <= _1E;

    // Check if the end of the second
    // range is inside the first range
    const e2_1 = _1S <= _2E && _2E <= _1E;

    // If any of the above conditions
    // are true, increment the counter
    if (s1_2 || e1_2 || s2_1 || e2_1) {
        count++;
    }
});

// Print the final count
console.log(count);
