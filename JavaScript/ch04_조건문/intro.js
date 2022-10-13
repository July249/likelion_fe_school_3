// 구조

let 조건식 = true;

if (조건식) {
  // 조건식이 참일 경우 실행될 코드
  console.log('중괄호를 사용했습니다.');
}

if (조건식) console.log('중괄호를 생략했습니다.');

let 조건식1 = false;
let 조건식2 = true;

if (조건식1) {
  // 조건식1이 참(true)일 경우 실행될 코드
  console.log(1);
} else if (조건식2) {
  // 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
  console.log(2);
} else {
  // 조건식1, 2 모두 거짓일 경우 실행될 코드
  console.log(3);
}

let money = 1000;
let score = 89;

if (score > 90) {
  console.log('mom : "i\'m so happy"');
  money += 1000000;
} else if (score > 80) {
  console.log('mom : "i\'m happy"');
  money += 100000;
} else if (score > 70) {
  console.log('mom : "happy?"');
  money += 10000;
} else if (score > 60) {
  console.log('mom : "happy!!!"');
} else {
  console.log('mom : "..."');
  money = 0;
}

// else if의 조건식에는 앞선 조건식이 포함되어 있다
/* 
score > 80 이라는 조건식은 앞선 score > 90의 연장선에서 해석되어야 한다
따라서 score > 80은 
90 >= score > 80과 동일하다
*/
