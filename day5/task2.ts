import { input } from './input.ts';

const indexOfMove = input.indexOf('move');

const crates = input.slice(0, indexOfMove);
const moveData = input.slice(indexOfMove);

const cratesRows = crates.split('\n').filter((x) => x);

const cratesNum = cratesRows
    .pop()
    ?.replaceAll(' ', '')
    .split('')
    .map((x) => +x)!;

const crateLetters = cratesRows.map((r) =>
    r
        .replaceAll('  ', ' ')
        .replaceAll('[', '')
        .replaceAll(']', '')
        .split('')
        .filter((_x, i) => i % 2 === 0)
);

const crateList: Record<number, string[]> = {};
cratesNum.forEach((num, i) => {
    crateList[num] = [];
    crateLetters.forEach((l) => {
        const letter = l.at(i)?.trim();
        if (letter) {
            crateList[num].unshift(letter);
        }
    });
});

const moves = moveData
    .split('\n')

    .map((x) =>
        x
            .split(' ')
            .map((x) => +x)
            .filter((x) => x)
    );

// Loop through each move
moves.forEach(([num, from, to]) => {
    // Find the tail of the from stack, which is the last num elements
    const tail = crateList[from].splice(crateList[from].length - num);

    // Add the tail to the end of the to stack
    crateList[to].push(...tail);
});

let topCrates = '';
cratesNum.forEach((n) => {
    topCrates += crateList[n].at(-1);
});

console.log(topCrates);
