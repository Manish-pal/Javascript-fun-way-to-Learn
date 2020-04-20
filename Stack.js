/* Implementing Stack with push() pop() and Peek() methods Simple and easy*/

/* Implementing Stack with push() pop() and Peek() methods Simple and easy*/
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null,
    this.bottom = null;
    this.length = 0;
  }
  
  peek() {
    //simply returning the top most value
    return this.top;
  }
  
  push(value) {
    
    const newNode = new Node(value);
    if(this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    }else{
    const oldVal = this.top;
    this.top = newNode;  //assigns the new node to top;
    this.top.next = oldVal;
    }
    this.length++;
    return this;
  }
  
  pop() {
  if(!this.top) {
    return null;
  }
  if(this.top === this.bottom) {
      this.bottom = null;
  }
  const holdVal = this.top;
  this.top = this.top.next;
  this.length--;
  return this;
  }

}

const myStack = new Stack();
myStack.push('google');
myStack.push('Apple');
myStack.push('facebook');
myStack.push('Snapchat');

myStack.peek();

myStack.pop();

myStack.pop();

myStack.pop();


