// 연습문제
let data = [
  {
    반: 1,
    번: 1,
    이름: '호준',
    중간고사점수: 55,
  },
  {
    반: 1,
    번: 2,
    이름: '길동',
    중간고사점수: 60,
  },
  {
    반: 1,
    번: 3,
    이름: '영희',
    중간고사점수: 30,
  },
  {
    반: 1,
    번: 4,
    이름: '철수',
    중간고사점수: 20,
  },
  {
    반: 1,
    번: 5,
    이름: '규리',
    중간고사점수: 100,
  },
];

// 중간고사 점수를 다 더하는 코드를 함수로 작성해주세요
/* function total(data) {
  let sum = 0;
  data.forEach((el) => {
    sum += el.중간고사점수;
  });
  return sum;
} */

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.

// 동현, 준근님 코드
function 평균값구하기(data) {
  let sum = 0;
  for (student of data) {
    sum += student['중간고사점수'];
  }
  return sum / data.length;
}

function 평균값구하기(data) {
  let 중간고사점수 = data.map((x) => x.중간고사점수);
  let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b);
  return 중간고사점수합 / data.length;
}

function 평균값구하기(data) {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
}

console.log(
  (function () {
    return (
      data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
    );
  })()
);

let a = (data) =>
  data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
console.log(a(data));

let b = (data) => {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
};
console.log(b(data));

// call by value(값의 전달), reference(참조의 전달), sharing

// 자바스크립트에는 call by value만 존재합니다!

// array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값의 수정이 됩니다.
// 값의 전달
let test = [10, 20, 30];

function 함수(a) {
  a[0] = 1000;
}

함수(test);

// 참조의 전달 (주소값의 전달)
test = 100;
function 함수(a) {
  a = 1000;
}

함수(test);

// 반례 - "call by reference는 존재한다!"의 반례
var a = {};
function test(b) {
  b = 1000;
}

test(a);
a;

/*
call by value
아규먼트에 값이 넘어올 때 복사한 값이 넘어온다!

call by reference
아규먼트에 값이 넘어올 때 주소값이 넘어온다! (주소값이 넘어왔으니 접근을 하면 원본이다!)

- javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘깁니다.

4. 김태수
원시값보다 덩치가 큰 배열이나 객체도 인자로써 옮겨질 때 값이 복제되어 전달되면 실행시간이 길어질 수 도 있을까요?

답 : 주소값을 복사하니 실행시간이 길어지지 않습니다.

4. 서동현 — 오늘 오후 3:28
변수가 가리키고 있는 공간에 저장된 '값'이 전달된다...?

답 : 주소값이 복사됩니다.

4. 유윤우 — 오늘 오후 3:29
지금 말씀하시는 부분이 원시값은 메모리에 값을 저장하고
object는 메모리에 참조주소를 저장해서 생기는 일 맞을까요?

답 : 이해하신 것이 맞습니다. 다만 이렇게 표현하는 것이 정확할 것 같아요. 원시값은 파라미터에 복사한 값을 저장하고 참조타입은 파라미터에 참조 주소를 복사하여 저장합니다.

4. 이준근 — 오늘 오후 3:30
함수 내부에서는 인자의 값을 가상 변수에 복제해서 로직을 수행하는데 참조값은 가상 변수에 주소값이 함께 담겨져서 값이 바뀌는 걸까요?

답 : 맞습니다. 주소값이 담겨져서 바뀌는 것입니다. 다만 주소값이 '복사'된 상태입니다.


4. 이정호 — 오늘 오후 3:31
메모리 주소를 복사해서 넘기기 때문에 새로운 주소가 할당된 경우에만 변경이 안된다는 거라고 이해해도 될까요?

답 : 정확합니다.
*/
