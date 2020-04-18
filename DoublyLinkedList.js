// Doublylinked list Programme.

class doublyLinkedList {
  constructor(value) {
      this.head =  {
          value:value,
          next: null,
          prev:null
      }
      this.tail = this.head;
      this.length = 1;
      
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev:null
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next:null,
      prev:null
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let current = this.head;
    while(current !== null) {
      array.push(current.value);
      current = current.next;
    }
   return array; 
  }

  insert(index, value) {

    if(index >= this.length) {
      console.log('This is not valid index for inserting appending it.');
      return this.append(value);
    }
    const newNode = {
      value:value,
      next:null,
      prev:null
    }
    const leader = this.traverseToIndex(index -1 );
    const follower = leader.next;
    newNode.prev = leader; 
    leader.next = newNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++; 
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      counter ++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index -1 );
    const follower = leader.next;
    const newNode = follower.next;
    leader.next = follower.next;
     newNode.prev = leader;
    this.length--; 
    return this;     
  }
}

let myLinkedList = new doublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(7);
myLinkedList.append(9);
myLinkedList.append(16);

myLinkedList.prepend(1);
myLinkedList.prepend(34);

myLinkedList.printList();
myLinkedList.insert(2, 99);

myLinkedList.insert(12, 69);
myLinkedList.printList();

myLinkedList.remove(2);
myLinkedList.printList();

myLinkedList.remove(2);
myLinkedList.printList();

myLinkedList.remove(1);
myLinkedList.printList();
