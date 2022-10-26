// class의 사용법
// function Robot(name) {
//     this.name = name;
// }

// Robot.prototype.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// }

// class 상속
class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = '아이크';
  }

  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
    this.sayYourName();
    console.log('Suceeding you, Father!');
  }
}

class FamilyTree {
  constructor(firstName) {
    this.firstName = firstName;
    this.lastName = '이';
  }

  myName() {
    console.log(`My name is ${this.lastName} ${this.firstName}.`);
  }
}

const one = new FamilyTree('지형');
one.myName(); // My Korean name is 이 지형.

class Child extends FamilyTree {
  constructor(firstName) {
    super(lastName);
    this.firstName = firstName;
  }
}

const two = new FamilyTree('은형');
two.myName();

//////////////////////////////

class Sausage {
  constructor(el1, el2) {
    this.재료1 = el1;
    this.재료2 = el2;
  }

  taste() {
    console.log(
      `음~~~ 이 소시지에서는 ${this.재료1}와 ${this.재료2} 맛이 나는구만!`
    );
  }
}

class FireSausage extends Sausage {
  constructor(el1, el2, el3) {
    super(재료1, 재료2);
    this.재료3 = el3;
  }
}

Sausage.taste();
