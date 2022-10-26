// 비공개 프로퍼티
/* class Robot {
  constructor(name) {
    this.name = name;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

const bot = new Robot('smith');

bot.name; // smith

bot.name = 'jay';
bot.name; // jay */

/* class Robot {
  #password;

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  getPassword() {
    return this.#password;
  }

  setPassword(pw) {
    this.#password = pw;
  }
} */

// #password 의 값에 접근하고 수정하려면 반드시 해당하는 기능을 하는 메서드를 사용해야합니다.
// 이때 값을 불러오는 메서드를 getter 메서드, 값을 수정하는 메서드를 setter 메서드로 부릅니다.

/* class Robot {
  #password;

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  get password() {
    return this.#password;
  }

  set password(pw) {
    this.#password = pw;
  }
}

const bot = new Robot('재현', 1234); */

/////////////////////////////////////////
// 클로저를 이용한 비공개 프로퍼티 생성 방법
function Person() {
  let age = 30;

  function innerPerson() {}

  innerPerson.prototype.getAge = function () {
    return age;
  };

  return innerPerson;
}

const PersonFunc = Person();
const person = new PersonFunc();

// iife 즉시 실행 함수

const NewPerson = (function () {
  let age = 30;

  function innerPeson() {}

  innerPeson.prototype.getAge = function () {
    return age;
  };

  return innerPeson;
})();

const personWithSecret = new NewPerson();
