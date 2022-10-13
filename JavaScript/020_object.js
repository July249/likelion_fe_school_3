// Object
// 1. 기본형태
let newuser = {
  //key : value
  id: 'licat',
  pw: '1234', // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
  name: 'leehojun',
  email: 'paul@weniv.com',
  active: true,
};

console.log(newuser['id']);
console.log(newuser.id);

// 2.
let user = [
  {
    //key: value
    id: 'licat',
    pw: '1234', // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
    name: 'leehojun',
    email: 'paul@weniv.com',
    active: true,
  },
  {
    //key : value
    id: 'lion',
    pw: '2345', // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
    name: 'leehojin',
    email: 'pa@weniv.com',
    active: true,
  },
];

console.log(user[0]['id']);

// 3. 아래와 같이 선언이 가능함
let a = 10;
let b = 20;
let c = 30;

let e = { a, b, c };
console.log(e);

/* 
let test = {'one','two', 'three'};
console.log(test); 
*/

// 4. 값을 변경할 수 있음
e['a'] = 50;
console.log(e);

// 객체 안의 key가 가진 value를 바꿀 수 있다

// 5. key 값으로 문자열 외에 다른 값을 넣었을 경우
let txt = 'hello';
let txt2 = { 0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o' };
console.log(txt[1]);
// e console.log(txt2[1]);
// e => 유사배열객체 != 배열 // 아래 2 코드가 실행 가능하게 해주는 것이 map
// console.log(txt2.1); // error
// console.log(txt2.{'one': 1}) // error

// 6. value의 값으로 문자열 외에 다른 값을 실행했을 경우
let test = {
  one: sum,
  two: console.log,
  three: window.innerWidth,
  four: [10, 20, 30],
  five: '10',
  six: 100,
};
console.log(test);
test.two('호준');
console.log(test.one(1, 2));

// 7. key와 value만 뽑아낼 수 있을까?
console.log(Object.keys(newuser)); // key만 출력
console.log(Object.values(newuser)); // value만 출력
console.log(Object.entries(newuser)); // key와 value 쌍으로 출력

// map에서 사용할 수 있습니다
// newuser.keys();
// newuser.values();
// newuser.entries();

// 8. Object spread 용법 - 예제
let 회원정보업데이트 = {
  name: 'cat',
  email: 'jun@naver.com',
};

newuser = { ...newuser, ...회원정보업데이트 };
console.log(newuser);

// 이렇게 바꾸시면 2개 다 바뀝니다
/* 
let newuser2 = newuser;
newuser2['id'] = 'helloworld'; 
console.log(newuser);
console.log(newuser2); */
// spread 기법을 사용하시면 원본을 만지지 않고 사용할 수 있습니다
let newuser2 = { ...newuser };
newuser2['id'] = 'helloworld';
console.log(newuser);
console.log(newuser2);

// 함수는 후에 자세히 다룹니다.
function sum(x, y) {
  return x + y;
}
// TMI입니다. 뒤에서 다룰 내용이에요.
// console.log(typeof sum);
// sum.value = 'hojun';
// console.log(console.dir(sum));
// console.log(sum.value);
// console.log(typeofsum);
