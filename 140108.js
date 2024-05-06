function solution(s) {
  let count = 0;
  let a_count = 0;
  let b_count = 0;
  let point = 0;
  for (let i = 0; i < s.length; i++) {
    alphabet = s[point];
    if (s[i] === alphabet) {
      a_count++;
    } else {
      b_count++;
    }
    if (a_count && b_count && a_count === b_count) {
      a_count = 0;
      b_count = 0;
      point = i + 1;
      count++;
    }
    if (i === s.length - 1 && a_count !== b_count) count++;
  }
  return count;
}

//다른 사람의 풀이
function solution_1(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}

function solution_2(s, count = 0) {
  if (!s) return count;
  let [first, ...rest] = s.split("");
  let countSame = 1;
  let countInSame = 0;
  let i = 0;
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++;
    else countInSame++;
    if (countSame === countInSame) break;
  }
  return solution_2(rest.slice(i + 1).join(""), count + 1);
}
