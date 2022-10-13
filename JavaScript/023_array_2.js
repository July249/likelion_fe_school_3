// 배열

// * 데이터의 집합. 여러개의 값을 하나의 이름으로 묶어 사용할 수 있게 도와줍니다.
// * 배열의 각 값은 원소(element) 혹은 요소 라고 부릅니다.
// * 배열의 크기는 length 프로퍼티를 통해 알 수 있습니다.
// * 배열의 생성자 함수에 숫자를 한개만 넣으면 인스턴스의 길이를, 여러 원소를 넣으면 배열의 원소를 뜻합니다.
// * 배열에도 리터럴 표현이 있습니다.(  [  ]  )
// * 각괄호 + 인덱스를 통해 각 원소에 접근 할 수 있으며, 원소에 값을 저장 할 수도 있습니다. 심지어 존재하지 않는 원소에도 접근이 가능합니다.
// * 리터럴 생성과 동시에 원소에 접근 할 수도 있습니다. ([1,2,3,][0] === 1)

let data = [10, 20, 30];
console.log(data.length);

let data2 = new Array(5);
console.log(data2);

let data3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');
console.log(data3);

// splice() : 기존의 요소를 삭제하거나, 교체하거나, 새 요소를 추가합니다. 인덱스, 카운트, 아이템 순서로 인자를 전달합니다.

// 아이템 삭제.
data3.splice(3, 1); // 3번 인덱스 요소 하나만 삭제
data3.splice(3); // 3번 인덱스부터 전부 삭제

// 아이템 추가
data3.splice(3, 0, '한라봉');
console.log(data3);

data3.splice(3, 1, '제주감귤');
console.log(data3);

data3.splice(3, 0, ['포도', '체리']);
console.log(data3);

// splice 문제
let fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
// 1. splice 를 이용해 코끼리를 제거해보세요.
// 2. 참치 다음에 다금바리를 추가해보세요.
// 3. 돌고래를 제거하고 옥돔과 갈치를 추가해보세요.
fish.splice(5);
console.log(fish);
fish.splice(4, 0, '다금바리');
console.log(fish);
fish.splice(2, 1, '옥돔', '갈치');
console.log(fish);
