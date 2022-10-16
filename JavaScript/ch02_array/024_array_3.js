// array 생성 방법
// 1. 리터럴
let array1 = [];

// 2. Array 생성자 함수 이용
let array2 = new Array(5);

console.log(array1);
console.log(array2);

// 3.
let array3 = new Array(5, 3, 2);
console.log(array3);

array3[0] = 100; // 값을 수정할 수 있다.
console.log(array3);

// 4. 배열에 존재하지 않은 인덱스에 접근하여서 값을 생성하는 경우
let array4 = [1, 2, 3];
array4[3] = 100;
console.log(array4); // [1, 2, 3, 100]
