let book = {
  name: 'abc',
  price: 1000,
  author: 'mike',
  publish: '22.10.11',
};

let newBook = {};

newBook['name'] = 'JavaScript';
newBook['price'] = 1000000;
newBook['author'] = 'james, bob, ellie';
newBook['publish'] = '22.10.30';

console.log(newBook);

function Book(name, price, author, publish) {
  this.name = name;
  this.price = price;
  this.author = author;
  this.publish = publish;
}

let data1 = Book('CSS', 10, 'Ujin', '22.12.10');
console.log(data1); // undefined (return 이 생략되어 있으므로)

// new 연산자를 붙였을 때 발생하는 차이점
// function Book(name, price, author, publish) {
//v this = {}
//  this.name = name;
//  this.price = price;
//  this.author = author;
//  this.publish = publish;
//v return this;
// }

let data2 = new Book('HTML', 10, 'Pran', '22.12.12');
console.log(data2); // Book { name: 'HTML', price: 10, author: 'Pran', publish: '22.12.12' }

let book1 = new Book('리액트', 10, '블루', '22.01.10');
let book2 = new Book('자바', 20, '엘로우', '22.03.20');
let book3 = new Book('파이썬', 30, '그린', '22.04.12');

console.log(book1, book2, book3);
