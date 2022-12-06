import { input } from './input.ts';

type rKey = keyof typeof roundOutcome;
type meKey = keyof typeof me;
const rounds = input.split('\n').map((r) => {
    return r.split(' ') as [rKey, meKey];
});

const roundOutcome = {
    //Rock
    A: {
        X: 'Scissors',
        Y: 'Rock',
        Z: 'Paper',
    },

    //Paper
    B: {
        X: 'Rock',
        Y: 'Paper',
        Z: 'Scissors',
    },

    //Scissors
    C: {
        X: 'Paper',
        Y: 'Scissors',
        Z: 'Rock',
    },
} as const;
const me = {
    X: 1, //🪨
    Y: 2, //📄
    Z: 3, //✂️
};
const winPoints = {
    X: 0, //❌
    Y: 3, //➖
    Z: 6, //✅
};
const Points = {
    Rock: 1, //🪨
    Paper: 2, //📄
    Scissors: 3, //✂️
};

const roundScore = (rKey: rKey, wKey: meKey) => {
    const myAction = roundOutcome[rKey][wKey];
    const basePoint = Points[myAction];
    const wp = winPoints[wKey];
    return basePoint + wp;
};

const sum = rounds.reduce((accumulator, [op, my]) => {
    const rs = roundScore(op, my);
    return accumulator + rs;
}, 0);
console.log(sum);
