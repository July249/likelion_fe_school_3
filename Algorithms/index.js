class Node {
  constructor(value) {
    this.value = value;
    // this.child = [] // 이진 트리가 아닌 트리를 만들 때 사용
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(value) {
    let init = new Node(value);
    this.root = init;
    this.length = 0;
  }

  insert(value) {
    let 새로운노드 = new Node(value);
    let 순회용현재노드 = this.root;

    while (순회용현재노드) {
      if (value == 순회용현재노드.value) {
        // 들어온 값이 존재하는 값이면 트리에 값을 추가하지 않습니다.
        return;
      } else if (value < 순회용현재노드.value) {
        // 들어온 값이 작을 경우 왼쪽에 붙어야함
        // 해당 값이 비어 있으면 값을 넣고
        // 비어있지 않으면 계속 타고 내려가야함
        if (!순회용현재노드.left) {
          순회용현재노드.left = 새로운노드;
          this.length += 1;
          return;
        }
        순회용현재노드 = 순회용현재노드.left;
      } else if (value > 순회용현재노드.right) {
        if (!순회용현재노드.right) {
          순회용현재노드.right = 새로운노드;
          this.length += 1;
          return;
        }
      }
    }
  }
}

let tree = new Tree(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(7);
console.log(tree.root.value);
