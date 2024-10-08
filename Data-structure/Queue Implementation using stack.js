class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value) {
      let newNode = new Node(value);
      if(this.length === 0){
        this.first = newNode;
        this.last = newNode;
      } else{
        this.last.next = newNode;
        this.last = newNode; 
      }
      this.length++;
      return this;
    }
    dequeue() { 
      if(this.length === 0){
        return null;
      }else{
        this.first = this.first.next;
        this.length--;
      }
      return this;
    }
    //isEmpty;
  }

  const myQueue = new Queue();
myQueue.enqueue("Sunny")
myQueue.enqueue("sakib")
myQueue.enqueue("joy")
console.log(myQueue.dequeue())
