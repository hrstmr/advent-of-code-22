import { input } from './1a-input.ts';
const elves = input.split('\n\n');
const sums = elves.map((calStr) => {
    const calListNum = calStr.split('\n').map((x) => +x);
    const sum = calListNum.reduce((ttl, x) => ttl + x, 0);
    return sum;
});

const sorted = sums.sort((a, b) => a - b);
console.log(sorted.at(-1));

// part 2
const top1 = sorted.at(-1) ?? 0;
const top2 = sorted.at(-2) ?? 0;
const top3 = sorted.at(-3) ?? 0;
console.log(top1 + top2 + top3);
