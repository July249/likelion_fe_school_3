// 배열의 맨 앞에 요소를 추가할 때 사용한다.
// 배열의 새로운 길이를 반환한다.

const cafe = ['coffee', 'cake', 'tea', 'cookie'];
const result = cafe.unshift('bread'); // 배열의 새로운 길이를 반환
console.log(result); // 5
console.log(cafe); // [ 'bread', 'coffee', 'cake', 'tea', 'cookie' ]
