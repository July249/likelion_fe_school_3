for (let i = 0; i < 10; i++) {
  console.log('before if ' + i);
  if (i > 3) {
    break;
  }
  console.log('after if ' + i);
}

let data = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < data.length; i++) {
  console.log(data[i]); // a b c d e
}

data = [1, 3, 4, 8, 13, 17, 20];

for (let i = 1; i < data.length; i++) {
  console.log(data[i] - data[i - 1]);
}

// 무한루프 만들기
let i = 0;
for (;;) {
  i++;
  console.log(i);
  if (i > 5) {
    break;
  }
}

for (let i = 0; ; ) {
  i++;
  console.log(i);
  if (i > 5) {
    break;
  }
}

for (let i = 0; ; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}
