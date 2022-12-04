// import { input } from './input.ts';

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8` as const;

const pairs = input
    .split('\n')
    .map((pair) => pair.split(',').flatMap((range) => range.split('-').map((digit) => +digit)));

let count = 0;
pairs.forEach((pr) => {
    const [E1S, E1E, E2S, E2E] = pr;
    const E1_contains_E2 = E1S <= E2S && E2E <= E1E;
    const E2_contains_E1 = E2S <= E1S && E1E <= E2E;

    if (E1_contains_E2 || E2_contains_E1) {
        count++;
        console.log({ E1S, E1E, E2S, E2E });
        console.log({ E1_contains_E2 });
        console.log({ E2_contains_E1 });
    }
});
console.log(count);
