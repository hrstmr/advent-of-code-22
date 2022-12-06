import { input } from './input.ts';
// const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb` as const;

const inputList = input.split('');

for (let i = 0; i < inputList.length; i++) {
    const subset = inputList.slice(i, i + 14);
    const isUnique = [...new Set(subset)].length === subset.length;
    console.log(isUnique);
    console.log(subset);

    if (isUnique) {
        console.log(i + 14);
        break;
    }
}

console.log(input);
