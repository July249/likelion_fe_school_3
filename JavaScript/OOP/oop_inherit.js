// 객체의 상속
const obj = {
  name: 'test',
};

// hasOwnProperty()
// 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
console.log(obj.hasOwnProperty('name')); // true
console.log(Object.getOwnPropertyDescriptors(obj));
/* 
{
  name: { value: 'test', writable: true, enumerable: true, configurable: true }
}
*/

const arr = [1, 2, 3];

console.log(arr.hasOwnProperty('name')); // false
// Array는 hasOwnProperty built-in 메서드를 가지고 있지 않은데 사용이 가능한 이유는??
// Object로부터 상속을 받고 있기 때문이다!
/*
Array 함수의 __proto__ 가 Object 함수의 prototype을 참조하고 있기 때문에 Array의 prototype에 존재하지 않는 Object 객체의 프로퍼티와 메서드를 사용할 수 있습니다. 
이처럼 자기 자신에게 존재하지 않는 프로퍼티나 메서드를 프로토타입을 통해 추적하는 과정을 프로토타입 체이닝이라고 합니다.
*/
console.log(arr.hasOwnProperty('length')); // true
console.log(arr.hasOwnProperty('0')); // true
// Array 생성자 함수는 __proto__를 가지고 있다.
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

// 예시
const str = new String(12345);
console.log(str);
console.log(str.hasOwnProperty()); // false
console.log(Object.getOwnPropertyDescriptors(str));
/* 
{
  '0': { value: '1', writable: false, enumerable: true, configurable: false },
  '1': { value: '2', writable: false, enumerable: true, configurable: false },
  '2': { value: '3', writable: false, enumerable: true, configurable: false },
  '3': { value: '4', writable: false, enumerable: true, configurable: false },
  '4': { value: '5', writable: false, enumerable: true, configurable: false },
  length: { value: 5, writable: false, enumerable: false, configurable: false }
}
*/
// Object.defineProperty(str, '0', { writable: true }); // error
console.log(Object.getOwnPropertyDescriptor(str, '0'));

const array = new Array(1, 2, 3, 4, 5);
console.log(array); // [ 1, 2, 3, 4, 5 ]
console.log(array.hasOwnProperty()); // false
console.log(Object.getOwnPropertyDescriptors(array));
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  '4': { value: 5, writable: true, enumerable: true, configurable: true },
  length: { value: 5, writable: true, enumerable: false, configurable: false }
}
*/

///////////////////////////////////////////

/* function Parent() {
  this.name = '재현';
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child() {
  Parent.call(this); // this는 instance를 가리키고 있는데, 이걸 Parent를 가리키도록 변경
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
  console.log('now i can walk!!');
}; */

// 위 코드를 Class로 변경함
class Parent {
  constructor() {
    this.name = '재현';
  }
  rename(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor(name) {
    // Parent.call(this); // this는 instance를 가리키고 있는데, 이걸 Parent를 가리키도록 변경
    super(name);
  }
  canWalk() {
    console.log('now i can walk!!');
  }
}

/**
 * 위의 코드에서 call 함수는 Child 함수의 this가 Parent 생성자 함수의 this를 바라보게 만듭니다.
 * 즉, Child 를 통해 생성된 인스턴스의 this 가 Parent 함수안의 프로퍼티에 접근할 수 있게합니다.
 * 그리고 Object.create 함수는 주어진 인자를 Child.prototype에 연결하는 역할을 합니다.
 * 즉 Parent 객체의 프로토타입을 Child 객체의 프로토타입이 참조하게 합니다.
 * 위의 두 가지  과정을 통해 Child 객체는 Parent 객체의 모든 것을 상속받게 됩니다.
 */
