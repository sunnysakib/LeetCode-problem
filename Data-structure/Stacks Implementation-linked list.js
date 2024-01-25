class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let holdingTop = this.top;
      this.top = newNode;
      this.top.next = holdingTop;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else {
      let holdTopNext = this.top.next;
      this.top = holdTopNext;
      this.length--;
    }
    return this;
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push("ewu.com");
myStack.push("udemy.com")
console.log(myStack.pop());


