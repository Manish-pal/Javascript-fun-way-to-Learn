/* Implementation of linked list in  a very simpler manner in javascript */
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
  /*
    let currentNode =  this.head;
    while(currentNode.next !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
*/
    
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array; 
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes index is greator than the length')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(Index) {
    
      const leader = this.traverseToIndex(Index -1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this;

  }
   
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  
  remove() {
    
    if(!this.head.next){
        return this.head;
    }
      let first = this.head; //sets the head node to first
      this.tail = this.head; //assigning the head node as tail
      let second = first.next; //  2nd node's reference 
      while(second) {
        let temp = second.next;
        second.next = first; //reverses the 2nd node's pointer to the first
        first = second; // now the second has become the first
        second = temp;  // the temp node has became the second.
        /* 
          initial :  1 -> 10 -> 19 -> 88 -> null
                  first second
          Now:       1 <- 10 -> 19 -> 88 -> null
                        first  second
        */
      }
      this.head.next = null // making the head node's next ref. to null
      this.head = first;    // assigning the head to first which is 88 now
      return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(3, 88);
myLinkedList.insert(20, 77);
myLinkedList.printList()
myLinkedList.remove(2);
myLinkedList.printList()


myLinkedList.reverse()
