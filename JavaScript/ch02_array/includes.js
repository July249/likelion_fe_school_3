// 특정 요소가 배열 안에 포함되어 있는지 확인하기 위해 사용한다
// 탐색하려는 요소가 문자열일 경우, 대소문자를 구분한다
// true, false를 반환한다
// Tip 반환값의 특징 때문에 조건식의 판별을 위해 사용되기도 한다

// Array.prototpye.includes(탐색하고자 하는 요소, 탐색의 시작 인덱스);
// cf. 탐색의 시작 인덱스는 생략이 가능 => 생략시 전체 요소를 대상으로 검사 진행

const cafe = ['coffee', 'cake', 'tea', 'cookie'];

console.log(cafe.includes('bread')); //expected output: false
console.log(cafe.includes('cake')); //expected output: true
// cake를 cafe[-3]에서 시작하여 검색
console.log(cafe[-3]); // undefined
console.log(cafe.includes('cake', -3)); //expected output: true
