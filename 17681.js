const isSameLength = (n, string) => {
  return string.toString(2).length === n
}

const toBinaryFn = (n, arr) => {
  //padStart를 이용해서 한줄로 줄일 수 있음 
  //const toBinaryString = (n, number) => number.toString(2).padStart(n, '0');
  return arr.map(a => {
      let toBinary;
      if(isSameLength(n, a)) toBinary = a.toString(2) 
      else {
          const diffLen = n - a.toString(2).length
          toBinary = "0".repeat(diffLen) + a.toString(2)
      }
      return toBinary
  })
}

const pushResult = (oneBinary, twoBinary, answer) => {
  oneBinary.forEach((a, a_idx) => {
      a.forEach((b, b_idx) => {
          if(b === twoBinary[a_idx][b_idx] && b === '0') answer[a_idx] += ' '
          else answer[a_idx] += '#'
      })
  })
  return answer
}
function solution(n, arr1, arr2) {
  let answer = [];
  answer = Array.from({ length : n }, () => "")
  //array가 들어오면 각각 2진수로 변경
  const oneBinary = toBinaryFn(n, arr1).map(a => a.split(""));
  const twoBinary = toBinaryFn(n, arr2).map(a => a.split(""));
  answer = pushResult(oneBinary, twoBinary, answer)
  return answer;
}



//////// ============다른 사람이 푼 답===============////

function solution_2(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}



///////
////| (비트 OR) 연산자 사용 (arr1[i] | arr2[i])
function solution_3(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
      answer.push(
          (arr1[i] | arr2[i])
          .toString(2)
          .padStart(n, 0)
          .replace(/1/gi, "#")
          .replace(/0/gi, " ")
      );
  }    
  return answer;
}
