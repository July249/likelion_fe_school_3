// 반환하는 값이 메소드를 가지고 있는 경우에만 method chaining이 가능하다

const cafe = ['coffee', 'cake', 'tea', 'cookie'];
const result1 = cafe.join('/');
console.log(result1); // coffee/cake/tea/cookie
const result2 = result1.split('/');
console.log(result2); // [ 'coffee', 'cake', 'tea', 'cookie' ]

// 다음과 같이 join()과 split() 메소드를 연속적으로 사용할 수 있다.
const result3 = cafe.join('/').split('/');
console.log(result3); // [ 'coffee', 'cake', 'tea', 'cookie' ]

// 반환값이 배열이 아닌 경우 method chain을 이용하면 에러가 발생한다.
// const result4 = cafe.unshift('bread').join('/'); // error - TypeError: cafe.unshift(...).join is not a function
