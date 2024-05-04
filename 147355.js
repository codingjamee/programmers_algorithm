//내가 푼 답

//split불필요
function solution(t, p) {
  var answer = 0;
  const arr = [];
  const tArr = t.split("");
  for (let i = 0; i < tArr.length - p.length + 1; i++) {
    arr.push(t.slice(i, i + p.length));
  }
  arr.map((a) => {
    parseInt(a) <= parseInt(p) && answer++;
  });
  return answer;
}

//다른 사람의 풀이

//for문 안에서 answer까지 계산 하여 중복 방지함
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
