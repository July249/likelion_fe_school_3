// call() , apply()
/* call() */
var peter = {
  name: 'Peter Parker',
  sayName: function () {
    console.log(this.name); // Peter Parker
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
console.log(peter.sayName); //
peter.sayName(); // Peter Parker
peter.sayName.call(bruce); // Bruce Wayne

console.log('-----------');

var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};

peter.sayName('!'); // Peter Parker!
peter.sayName.call(bruce, '!'); // Bruce Wayne!

console.log('-----------');

/* apply() => call()과 동일하지만 인자가 여러개! */
var peter = {
  name: 'Peter Parker',
  sayName: function (is, is2) {
    console.log(this.name + ' is ' + is + ' or ' + is2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};

peter.sayName.apply(bruce, ['batman', 'richman']); // Bruce Wayne is batman or richman

/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */

console.log('-----------');

// bind()

function sayName() {
  console.log(this.name);
}

var bruce = {
  name: 'bruce',
  sayName: sayName,
};

var peter = {
  name: 'peter',
  sayName: sayName.bind(bruce),
};

peter.sayName(); // bruce
bruce.sayName(); // bruce

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */

console.log('-----------');

/* 화살표 함수에서의 this와 기명함수에서의 this 차이점 */
/* 기명함수에서의 this */
const person1 = {
  name: 'hojun',
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    function b() {
      console.log(this);
      console.log(this.name);
      function c() {
        console.log(this);
        console.log(this.name);
      }
      c();
    }
    b();
  },
};
person1.a();

//출력
/*
{name: 'hojun', age: 25, a: ƒ}
hojun

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
''

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
''
*/

/* 화살표 함수에서의 this */
// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person2 = {
  name: 'hojun',
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
        console.log(this);
        console.log(this.name);
      };
      c();
    };
    b();
  },
};
person2.a();

//출력
/*
{name: 'hojun', age: 25, a: ƒ} 
hojun

{name: 'hojun', age: 25, a: ƒ} 
hojun

{name: 'hojun', age: 25, a: ƒ}
hojun
*/
console.log('-----------');
