import { input } from './input.ts';

type opKey = keyof typeof opp;
type meKey = keyof typeof me;
const opp = {
    A: 1, //🪨
    B: 2, //📄
    C: 3, //✂️
};
const me = {
    X: 1, //🪨
    Y: 2, //📄
    Z: 3, //✂️
};

const winScore = (oKey: opKey, mKey: meKey) => {
    if (opp[oKey] === me[mKey]) return 3;

    if (opp[oKey] < me[mKey]) {
        // 🪨 🆚 ✂️
        if (opp[oKey] === 1 && me[mKey] === 3) return 0;
        return 6;
    }
    if (opp[oKey] > me[mKey]) {
        // 🪨 🆚 ✂️
        if (me[mKey] === 1 && opp[oKey] === 3) return 6;
        return 0;
    }
    throw new Error(oKey + ' | ' + mKey);
};

const roundScore = (oKey: opKey, mKey: meKey) => {
    const baseScore = me[mKey];
    const winPoints = winScore(oKey, mKey);
    return baseScore + winPoints;
};

const rounds = input.split('\n').map((r) => {
    return r.split(' ') as [opKey, meKey];
});

const sum = rounds.reduce((ttl, [op, my]) => {
    const rs = roundScore(op, my);
    return ttl + rs;
}, 0);
console.log(sum);
