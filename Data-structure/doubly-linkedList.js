// 3 -> 10 -> 20 -> 5 -> 6

/*
  Time Comlexity
    append   O(1)
    prepend  O(1)
    lookup   O(n)
    insert   O(n)
    remove   O(n)
*/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null,
      },
      this.tail = this.head;
      this.length = 1;
    }
  
    // method
    append(value) {
      // TM -> O(1)
      const newNode = new Node(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    prepend(value) {
      // TM -> O(1)
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
  
    insert(index, value) {
      // TM -> O(N)
      const newNode = new Node(value);
  
      if (index > this.length) {
        this.append(value);
        return this.printList();
      }
  
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index - 1) {
        currentNode = currentNode.next;
        counter++;
      }
      const firstNode = currentNode;
      const secondNode = firstNode.next;
      firstNode.next = newNode;
      secondNode.prev = newNode;
      newNode.next = secondNode;
      newNode.prev = firstNode;
      this.length++;
      return this.printList();
    }
  
    remove(index) {
      // TM -> O(N)
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index - 1) {
        currentNode = currentNode.next;
        counter++;
      }
      const secondNode = currentNode.next.next
      secondNode.prev = currentNode;
      currentNode.next = secondNode;
      this.length--;
      return this.printList();
    }
  
    printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
  }
  
  const myLinkList = new DoublyLinkedList(10);
  myLinkList.append(8);
  myLinkList.append(6);
  myLinkList.prepend(3);
  myLinkList.insert(2, 20)
  console.log(myLinkList.remove(1))
  