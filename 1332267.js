function solution(a, b, n) {
  let emptyBottles = n; //20
  let answer = 0;
  while (emptyBottles >= a) {
    let returnNum = Math.floor(emptyBottles / a) * b;
    let remain = emptyBottles % a;

    answer += returnNum;
    emptyBottles = returnNum + remain;
  }
  return answer;
}
