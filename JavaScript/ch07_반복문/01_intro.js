for (let i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

// airbnb 컨벤션에서 권장된 사항
// IE 전부 사용 가능
for (const i in ['one', 'two', 'three']) {
  console.log(i); // 0 1 2
}
// airbnb 컨벤션에서 권장된 사항
// IE 전부 사용 불가
for (const i of ['one', 'two', 'three']) {
  console.log(i); // one two three
}

/* 
for => 단순 순회

for - in => 입력된 배열의 프로퍼티 키를 순회

for - of => 입력된 배열의 프로퍼티 값을 순회
*/
