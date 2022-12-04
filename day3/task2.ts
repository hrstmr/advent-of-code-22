// import { input } from './input.ts';
const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw` as const;

const rugSacks = input.split('\n');

const groupedRugSacks: string[][][] = [];
let currentGroup: string[][] = [];
rugSacks.forEach((r, i) => {
    currentGroup.push([...r]);
    if (i === rugSacks.length - 1) {
        // currentGroup.push([...r]);
        groupedRugSacks.push(currentGroup);
        return;
    }
    if (i % 3 === 0 && i !== 0) {
        // console.log('if', i);

        // console.log(groupedRugSacks);
        groupedRugSacks.push(currentGroup);
        currentGroup = [];
    }
    // console.log('else', i);
    // console.log(rugSacks.length);

    currentGroup.push([...r]);
});
// console.log(groupedRugSacks);

const LetterPriority = [
    '', //unshift
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

let count = 0;

groupedRugSacks.forEach((gr) => {
    // find the common items using filter()
    // console.log(gr);
    const common = gr[0].filter((x) => gr[1].includes(x) && gr[2].includes(x));

    // console.log(common);

    count += LetterPriority.indexOf(common[0] ?? '');
});
// rugSacks.forEach(([...items]) => {
//     let first = items.toSpliced(0, items.length / 2);
//     let last = items.toSpliced(items.length / 2, items.length);
//     let blackList = new Set<string>();
//     first.forEach((f) => {
//         if (!blackList.has(f)) {
//             // console.log(last.find((l) => l === f));

//             count += LetterPriority.indexOf(last.find((l) => l === f) ?? '');
//             blackList.add(f);
//         }
//     });
//     // console.log({
//     //     first,
//     //     last,
//     // });
// });

console.log(count);

// console.log(0 % 3);
// console.log(1 % 3);
// console.log(2 % 3);
// console.log(3 % 3);
