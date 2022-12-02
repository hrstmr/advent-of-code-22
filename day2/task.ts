import { input } from './input.ts';

// export const input = `A Y
// B X
// C Z` as const;

console.log(input);

const roundStrings = input.split('\n');
const rounds = roundStrings.map((r) => {
    const tup = r.split(' ');
    return {
        op: tup[0] as keyof typeof opp,
        my: tup[1] as keyof typeof me,
    };
});

const opp = {
    A: 1, //Rock
    B: 2, //Paper
    C: 3, //Scissors
};
const me = {
    X: 1, //Rock
    Y: 2, //Paper
    Z: 3, //Scissors
};
const winScore = (oKey: keyof typeof opp, mKey: keyof typeof me) => {
    if (!opp[oKey]) throw new Error(oKey);
    if (!me[mKey]) throw new Error(oKey);

    if (opp[oKey] === me[mKey]) return 3;

    if (opp[oKey] < me[mKey]) {
        if (opp[oKey] === 1 && me[mKey] === 3) return 0;
        return 6;
    }

    if (opp[oKey] > me[mKey]) {
        if (me[mKey] === 1 && opp[oKey] === 3) return 6;
        return 0;
    }

    throw new Error(oKey + '|' + mKey);
};
const roundScore = (oKey: keyof typeof opp, mKey: keyof typeof me) => {
    const baseScore = me[mKey];
    const winPoints = winScore(oKey, mKey);
    console.log({ baseScore, winPoints });
    return baseScore + winPoints;
};
console.log(rounds);

const sum = rounds.reduce((accumulator, current) => {
    //   console.log(accumulator);
    const rs = roundScore(current.op, current.my);
    console.log(rs);

    return accumulator + rs;
}, 0);
console.log(sum);
