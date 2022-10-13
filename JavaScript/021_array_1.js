// Array
// 값의 변경이 가능합니다
// 대부분 동일한 자료의 형태가 반복됩니다
let fruit = ['🍎', '🍉', '🍑', '🍓', '🍌'];
console.log(fruit[1]);
let takeOut = fruit.pop();
console.log(fruit);
fruit.push('🫐');
console.log(fruit);
fruit.push(takeOut);
console.log(fruit);

// 0. 행렬에서 값 찾기
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// 6을 출력해보세요
console.log(array[1][2]);

// TMI
function sum(x, y) {
  return x + y;
}
let test = [1, 2, 3];
let obj = { one: 1, two: 2 };
let data = [console.log, sum, test, obj];
