// map 메소드를 이용해서 name의 값들을 원소로하는 새로운 배열을 만들어보자

var studentList = [
  {
    id: 1,
    name: '원범',
    score: 'great',
  },
  {
    id: 2,
    name: '김진',
    score: 'nice',
  },
  {
    id: 3,
    name: '혜원',
    score: 'good',
  },
  {
    id: 4,
    name: '재현',
    score: 'too cool for school',
  },
];

const nameArr = studentList.map((obj) => obj.name);
console.log(nameArr);
