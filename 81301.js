const stringArr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  let answer = s;
  for (let i = 0; i < stringArr.length; i++) {
    const arr = answer.split(stringArr[i]);
    answer = arr.join(i);
  }
  console.log(answer);
  return +answer;
}
