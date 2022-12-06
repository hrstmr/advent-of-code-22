import { input } from './input.ts';
// const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb` as const;

const inputList = input.split('');
const buffer = 14;
for (let i = 0; i < inputList.length; i++) {
    const subset = inputList.slice(i, i + buffer);
    const isUnique = new Set(subset).size === buffer;
    if (isUnique) {
        console.log(i + buffer);
        break;
    }
}
