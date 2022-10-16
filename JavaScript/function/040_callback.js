// callback function

function sum(x, y, callback) {
  callback(x + y);
  // return x + y; // 30
}

/* function documentWriter(s) {
  document.write('callback', s);
} */

sum(10, 20, console.log); // 30
// sum(10, 20, documentWriter); // callback 30

function pow(x) {
  return x ** 2;
} // x => x ** 2

let arr = [10, 20, 30, 40, 50];
console.log(arr.map(pow));

function twoTimes(x) {
  console.log(2 * x);
}

arr.forEach(twoTimes);

/////////////
// Q. 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문을 완성하세요
arr.map((x) => x * 2);

let result = [];
arr.forEach((e) => {
  result.push(e ** 2);
});
console.log(result);

/* 
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
    </head>
    <body>
        <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </ul>
        <script>
            let e = document.querySelectorAll("li");
            console.log(e);
            e.forEach((e) => console.log(e)); // 주의! IE에서 작동하지 않습니다.
        </script>
    </body>
</html>
*/
