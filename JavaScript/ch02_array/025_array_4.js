const cafe = ['coffee', 'cake', 'tea', 'cookie'];

//맨 앞에서 요소를 추가하는 경우 - unshift()
// const count = cafe.unshift('bread');

// console.log(count); // expected output: 5
// console.log(cafe); // expected output: ['bread', 'coffee', 'cake', 'tea', 'cookie']

// 맨 앞에서 요소를 지우는 경우 - shift()
// const firstElement = cafe.shift();

// console.log(firstElement); // bread
// console.log(cafe); // ['coffee', 'cake', 'tea', 'cookie']

// 맨 뒤 요소를 추가할 때 - push()
// const count = cafe.push('bread');

// console.log(count); // expected output: 5
// console.log(cafe); //expected output: ['coffee', 'cake', 'tea', 'cookie', 'bread']

// 맨 뒤 요소를 제거할 때 - pop()
// console.log(cafe.pop()); //expected output: 'cookie'
// console.log(cafe); //expected output: ['coffee', 'cake', 'tea']

// 특정 인덱스에 요소를 위치시킬 때 + 특정 요소를 제거할 때 - splice()
/* const cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.splice(1, 0, 'bread')

cafe
//expected output: ['coffee', 'bread', 'cake', 'tea', 'cookie']

const cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.splice(-1, 2, 'bread')

cafe
//expected output: ['coffee', 'cake', 'tea', 'bread'] */

// slice() 예제

// 다음 배열에서 물고기가 아닌 것을 슬라이스를 이용하여 콘솔로 출력하세요
let fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
// console.log(fish.slice(2, 3) + ',' + fish.slice(5));

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter((val) => val > 3)); // [4, 5, 6]
console.log(arr.map((val) => val > 3)); // [ false, false, false, true, true, true ]
console.log(arr.forEach((val) => val > 3)); // undefined
