// 파일이름 : 006_fs(file_system)\app.js

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const fs = require('fs');

// rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1 파일 이름 변경
// let 변수 = '이호준'; // 사용자 이름
// let 날짜 = new Date();
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//   console.log(err); // null
// });

// 2 파일 읽어오기
fs.readFile('./test.txt', 'utf8', (err, data) => {
  console.log(err); // null
  console.log(data); // 안녕하세요~
});

// 3
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 4
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err);
// });

// 5
// fs.appendFile('./test2.txt', '\nhello world 3', (err)=>{
//     console.log(err);
// });

// 6
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err);
// });

// 7 디렉토리 생성
fs.mkdir('./yoyo', (err) => {
  console.log(err);
});
