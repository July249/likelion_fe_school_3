let data = {
  one: '하나',
  two: '둘',
  three: '셋',
  four: '넷',
  five: '다섯',
};

for (const i in data) {
  console.log(i);
}

for (const i in data) {
  console.log(data[i]);
}

// 질의 응답
console.log(data.one);
console.log(data.two);
console.log(data.three);
console.log(data.four);
console.log(data.five);

let data2 = [10, 20, 30, 40];

for (const i in data2) {
  console.log(i);
}
