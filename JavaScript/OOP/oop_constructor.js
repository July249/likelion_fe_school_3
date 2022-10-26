/* function NewFactory(name) {
  this.name = name;
  this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  };
}

let robot1 = new NewFactory('브랜든');
let robot2 = new NewFactory('찰리');

console.log(robot1 instanceof NewFactory);
console.log(robot2 instanceof NewFactory);

robot1.sayYourName();
robot2.sayYourName();

console.log(robot1.sayYourName instanceof NewFactory);
console.log(robot2.sayYourName instanceof NewFactory);

console.log(robot1.sayYourName === robot2.sayYourName);

NewFactory.prototype.sayYourName2 = function () {
  console.log(`삐리비리. 제 이름은 ${this.name}2입니다. 주인님.`);
};

robot1.sayYourName2();
robot2.sayYourName2();

console.log(robot1.sayYourName2 instanceof NewFactory);
console.log(robot2.sayYourName2 instanceof NewFactory);

console.log(robot1.sayYourName2 === robot2.sayYourName2); */

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
  this.yourLunch = function () {
    let num = Math.floor(Math.random() * array.length);
    console.log(
      `당신의 메뉴는 "${this.array[num]}". 선택권은 없습니다. 닝겐! 주는 사람 마음입니다~ 삐리삐리`
    );
  };
}

let ai1 = new DeliveryRobot(foodList);
ai1.yourLunch();
