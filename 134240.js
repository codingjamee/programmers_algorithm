function solution(food) {
  let answer = '';
  food.map((a, index) => answer += (index.toString()).repeat(Math.floor(a/2)))
  answer = answer + '0' + answer.split("").reverse().join('')
  return answer;
}

function solution(food) {
  let answer = '';
  food.map((a, index) => answer += (index.toString()).repeat(Math.floor(a/2)))
  answer = answer + '0' + answer.split("").reverse().join('')
  return answer;
}

//다른사람의 풀이 

function solution_2(food) {
    var answer = '';
    let arr = [];

    food.map((f,i) => {
        f = f % 2 == 0 ? f : f -1;
        for(let j=0;j<f/2;j++){
            arr.push(i);
        }
    });

    answer = arr.join('') + 0 + arr.reverse().join('');

    return answer;
}