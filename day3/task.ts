import { input } from './input.ts';
// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw` as const;

const rugSacks = input.split('\n');

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
rugSacks.forEach(([...items]) => {
    let first = items.toSpliced(0, items.length / 2);
    let last = items.toSpliced(items.length / 2, items.length);
    let blackList = new Set<string>();
    first.forEach((f) => {
        if (!blackList.has(f)) {
            // console.log(last.find((l) => l === f));

            count += LetterPriority.indexOf(last.find((l) => l === f) ?? '');
            blackList.add(f);
        }
    });
    console.log({
        first,
        last,
    });
});

console.log(count);
