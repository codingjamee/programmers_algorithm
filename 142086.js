function solution(s) {
  const answer = [];
  const sArr = [...s];
  for (let i = 0; i < sArr.length; i++) {
    const foundIndex = sArr.slice(0, i).reverse().indexOf(sArr[i]);
    answer.push(foundIndex === -1 ? -1 : foundIndex + 1);
  }
  return answer;
}

//다른사람의 풀이

function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
