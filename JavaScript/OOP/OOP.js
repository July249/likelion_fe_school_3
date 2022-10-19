const me = {
  name: '한재현',
  address: '제주도 제주시 인다 1길',
  phoneNum: '010-8001-6536',
  canWalk: function () {
    console.log('재현이가 걷는다.');
  },
  teaching: function (student) {
    student.levelUp();
  },
};

const student = {
  level: 1,
  levelUp: function () {
    this.level++;
  },
};

me.teaching(student);

let myArr = new Array(1, 2, 3);
let myArr2 = new Array(4, 5, 6);

class Sausage {
  constructor(소고기, 파) {
    this.소고기 = 소고기;
    this.파 = 파;
  }
  taste() {
    console.log(`${this.소고기}와 ${this.파} 맛이 난다!`);
  }
}

class FiresSausage extends Sausage {
  constructor(소고기, 파, 불맛) {
    super(소고기, 파);
    this.불맛 = 불맛;
    this.name = '불맛 소시지';
  }
  firstSpoon() {
    this.taste();
  }
}

const newSausage = new FiresSausage('소고기', '파');

newSausage.firstSpoon();
