import { input } from "./1a-input.ts";
// const input = await Deno.readTextFile("./1a-input.txt");
const elves = input.split("\n\n");
console.log(elves);
// const elves = input.split("\n\n");
const sums = elves.map((calStr) => {
  let calList = calStr.split("\n");
  const calListNum = calList.map((x) => +x);
  console.log(calListNum);
  const sum = calListNum.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
  console.log(sum);
  return sum;
});

console.log(sums);
console.log(sums.sort((a, b) => a - b));
const sorted = sums.sort((a, b) => a - b);
console.log(sorted[sorted.length - 1]);

const top1 = sorted[sorted.length - 1];
console.log(sorted[sorted.length - 2]);

const top2 = sorted[sorted.length - 2];
console.log(sorted[sorted.length - 3]);

const top3 = sorted[sorted.length - 3];

console.log(top1 + top2 + top3);
