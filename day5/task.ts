import { input } from './input.ts';
// const input = `    [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2` as const;

// console.log(input);

const indexOfMove = input.indexOf('move');
console.log(indexOfMove);

const crates = input.slice(0, indexOfMove);
const moveData = input.slice(indexOfMove);
console.log({ crates, moveData });

const cratesRows = crates.split('\n').filter((x) => x);
console.log(cratesRows);

const cratesNum = cratesRows
    .pop()
    ?.replaceAll(' ', '')
    .split('')
    .map((x) => +x)!;
console.log(cratesNum);

const crateLetters = cratesRows.map((r) =>
    r
        .replaceAll('  ', ' ')
        .replaceAll('[', '')
        .replaceAll(']', '')
        .split('')
        .filter((x, i) => i % 2 === 0)
);

console.log({ crateLetters });

// console.log(crateLetters);

let crateList: Record<number, string[]> = {};
cratesNum.forEach((num, i) => {
    crateList[num] = [];
    crateLetters.forEach((l) => {
        const letter = l.at(i)?.trim();
        if (letter) {
            crateList[num].unshift(letter);
        }
    });
});

console.log(crateList);

const moves = moveData
    .split('\n')

    .map((x) =>
        x
            .split(' ')
            .map((x) => +x)
            .filter((x) => x)
    );

console.log(moves);

moves.forEach(([num, from, to]) => {
    for (let i = 0; i < num; i++) {
        crateList[to].push(crateList[from].pop()!);
        // console.log(crateList);
    }
});

console.log(crateList);

let topCrates = '';
cratesNum.forEach((n) => {
    topCrates += crateList[n].at(-1);
});

console.log(topCrates);
