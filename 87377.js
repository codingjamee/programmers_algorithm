//문제 해설답안

const intersectionPoints = [];

const INFINITY = Number.MAX_SAFE_INTEGER;

let xMin = INFINITY,
  yMin = INFINITY;
let xMax = -INFINITY,
  yMax = -INFINITY;

function solution(line) {
  let answer = [];
  const LINE_LENGTH = line.length;

  for (let index1 = 0; index1 < LINE_LENGTH - 1; index1++) {
    for (let index2 = index1 + 1; index2 < LINE_LENGTH; index2++) {
      getIntersectionPoints(line, index1, index2);
    }
  }

  const xSize = xMax - xMin + 1,
    ySize = yMax - yMin + 1;
  const base = [];
  for (let yIndex = 0; yIndex < ySize; yIndex++) {
    const row = [];
    for (let xIndex = 0; xIndex < xSize; xIndex++) {
      row.push(".");
    }
    base.push(row);
  }

  //base의 형태
  // [
  //   ['.','.','.','.','.'], 
  //   ['.','.','.','.','.'],
  //   ['.','.','.','.','.'],
  // ]
  //base배열의 길이 ySize : yMax - yMin + 1
  //내부의 배열의 길이 xSize : xMax - xMin + 1

  //*로 바꿔야하는 곳의 index를 구하는 방법 
  //yMax - y는 최대 높이 중 선택해야하는 배열
  //x - xMin을 하는 이유는
  //최솟값부터 인덱스 0이 시작됨
  //yMax - y를 하는 이유는
  //최댓값부터 인덱스 0이 시작됨


  intersectionPoints.forEach(([x, y]) => (base[yMax - y][x - xMin] = "*"));
  answer = base.map((item) => item.join(""));

  return answer;
}

function getIntersectionPoints(line, firstIndex, secondIndex) {
  const [a, b, e] = line[firstIndex];
  const [c, d, f] = line[secondIndex];

  const denominator = a * d - b * c;
  if (!denominator) return;

  const xNumerator = b * f - e * d;
  const yNumerator = e * c - a * f;
  if (xNumerator % denominator || yNumerator % denominator) return;

  const x = xNumerator / denominator;
  const y = yNumerator / denominator;

  intersectionPoints.push([x, y]);
  //min과 max를 구한다.
  //최댓값 - 최솟값 + 1이 완성 최종 높이와 너비가 될 것. 

  xMin = Math.min(xMin, x);
  xMax = Math.max(xMax, x);
  yMin = Math.min(yMin, y);
  yMax = Math.max(yMax, y);
}
