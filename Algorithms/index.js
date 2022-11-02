class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // 초기설정을 위해서 init 노드를 생성
    let init = new Node('init');
    // 초기설정
    this.head = init;
    this.tail = init;
    this.count = 0;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.count += 1;
  }

  // 99 -> 2 -> 13 -> 86 -> 32
  // => 99, 2, 13, 86, 32

  toString() {
    let 순회용현재노드 = this.head; // 순회용현재노드 = {data: init, next|| -> {99 ... }}

    //처음 순회용 현재 노드가 init이기 때문에
    순회용현재노드 = 순회용현재노드.next;
    /* 
    순회용현재노드 = init.next
    // 시작~~~
    시작값 <= {data: 99, next: {...}}                        => data: 99  => '' + 99 => '99, ' 
    순회용현재노드 = {data: 99, next: {...}}.next
    {data: 2, next: {...}}                         => data: 2  => '' + 2 => '2, '
    순회용현재노드 = {data: 2, next: {...}}.next
    {data: 13, next: {...}}                        => data: 13  => '' + 13 => '13, '
    순회용현재노드 = {data: 13, next: {...}}.next
    {data: 86, next: {...}}                        => data: 86  => '' + 86 => '86, '
    순회용현재노드 = {data: 86, next: {...}}.next
    {data: 32, next: null}                         => data: 32  => '' + 32 => '32, '
    */
    // 순회용현재노드 = {data: 99, next: {data: 2, next: {data: 13, next: ...} ....}}

    let 출력데이터 = '';
    for (let i = 0; i < this.count; i++) {
      출력데이터 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }
    // i = 4
    // 출력데이터 = '99, 2, 13, 86, 32, '

    return 출력데이터;
  }
}
/* 
{data: init, next: {data: 99, next: {data: 2, next: {data: 13, next: {data: 86, next ....}}}}}
                                          ↑
                                    순회용현재노드.next
*/

l = new LinkedList();
l.append(99);
l.append(2);
l.append(13);
l.append(86);
l.append(32);
console.log(l);
