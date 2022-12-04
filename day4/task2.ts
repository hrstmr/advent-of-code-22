import { input } from './input.ts';

// const input = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8` as const;

const pairs = input
    .split('\n')
    .map((pair) => pair.split(',').flatMap((range) => range.split('-').map((digit) => +digit)));

let count = 0;
pairs.forEach((pr) => {
    const [_1S, _1E, _2S, _2E] = pr;

    const _1S_touches__2 = _2S <= _1S && _1S <= _2E;
    const _1E_touches__2 = _2S <= _1E && _1E <= _2E;

    const _2S_touches__1 = _1S <= _2S && _2S <= _1E;
    const _2E_touches__1 = _1S <= _2E && _2E <= _1E;
    console.log(_1S_touches__2 || _1E_touches__2 || _2S_touches__1 || _2E_touches__1);

    if (_1S_touches__2 || _1E_touches__2 || _2S_touches__1 || _2E_touches__1) {
        count++;
        console.log({ _1S, _1E, _2S, _2E });
        console.log({ _1S_touches__2, _1E_touches__2, _2S_touches__1, _2E_touches__1 });
    }
});
console.log(count);
