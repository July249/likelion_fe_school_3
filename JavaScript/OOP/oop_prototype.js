function NewFactory(name) {
  this.name = name;
  this.sayYourName = function () {
    console.log(`삐리삐리, 제 이름은 ${this.name}입니다. 주인님`);
  };
}

const robot1 = new NewFactory('게리');
const robot2 = new NewFactory('알리');

console.log(robot1.sayYourName === robot2.sayYourName); // false

function NewFactory2(name) {
  this.name = name;
}

NewFactory2.prototype.sayYourName = function () {
  console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
};

const robot3 = new NewFactory2('뮤라');
const robot4 = new NewFactory2('홀리');

robot3.sayYourName();
robot4.sayYourName();

console.log(robot3.sayYourName === robot4.sayYourName); // true

console.log(robot3.name); // 뮤라
console.log(robot3.__proto__); // { sayYourName: [Function (anonymous)] }
console.log(NewFactory2.prototype); // { sayYourName: [Function (anonymous)] }
console.log(robot3); // NewFactory2 { name: '뮤라' }
console.log(robot3.__proto__ === NewFactory2.prototype); // true

///////////////////////////////////////////////////////////////

const foodList = [
  '김치',
  '계란찜',
  '된장찌개',
  '김치찌개',
  '콩나물무침',
  '삼겹살',
  '제육볶음',
  '돈까스',
  '냉면',
];

function DeliveryRobot(array) {
  this.array = array;
  this.num = Math.floor(Math.random() * this.array.length);
}

DeliveryRobot.prototype.yourLunch = function () {
  // let num = Math.floor(Math.random() * this.array.length);
  console.log(`오늘의 서비스는 "${this.array[this.num]}" 입니다!`);
};

let ai1 = new DeliveryRobot(foodList);
ai1.yourLunch();
console.log(ai1);
/*
DeliveryRobot {
  array: [
    '김치',       '계란찜',
    '된장찌개',   '김치찌개',
    '콩나물무침', '삼겹살',
    '제육볶음',   '돈까스',
    '냉면'
  ]
}
 */
console.log(ai1.__proto__); // { yourLunch: [Function (anonymous)] }
console.log(DeliveryRobot.prototype); // { yourLunch: [Function (anonymous)] }

let ai2 = new DeliveryRobot(foodList);
ai2.yourLunch();
console.log(ai2);
console.log(ai2.__proto__); // { yourLunch: [Function (anonymous)] }
console.log(DeliveryRobot.prototype); // { yourLunch: [Function (anonymous)] }
