let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// 무한 루프
/* while (true) {
  console.log('무한 반복!');
} */

i = 1;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  // j는 다시 1부터 시작하여야 하므로 초기화를 선언하여 준다
  j = 1;
  i++;
}

// break
let k = 2;
let l = 1;
while (k < 10) {
  while (l < 10) {
    console.log(`${k} X ${l} = ${k * l}`);
    l++;
  }
  l = 1;
  /* 4단 까지만 출력하고 싶은 경우 */
  if (k >= 4) {
    break;
  }
  k++;
}

//
let sum = 0;
let i = 0;

do {
  i++;
  sum += i;
} while (i < 10);

console.log(sum);

let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  j = 1;
  if (i == 4) {
    break;
  }
  i++;
}

// 무한반복
let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  j = 1;
  if (i == 4) {
    continue;
  }
  i++;
}

// continue는 다음 루프로 갑니다.
let i = 1;
let j = 1;
while (i < 9) {
  i++;
  if (i == 4) {
    continue;
  }
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  j = 1;
}

for (let i = 0; i < 10; i++) {
  if (i === 4 || i === 5) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 4 || i === 5) {
    break;
  }
  console.log(i);
}

//

timestable: for (let x = 2; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    if (x === 4) break timestable;
    console.log(`${x} X ${y} = ${x * y}`);
  }
}

for (let x = 2; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    if (x === 4) break;
    console.log(`${x} X ${y} = ${x * y}`);
  }
}

// - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// - `break`문은 모든 레이블에서 사용할 수 있다.
// - `continue`문은 반복문에서만 사용 가능하다.
