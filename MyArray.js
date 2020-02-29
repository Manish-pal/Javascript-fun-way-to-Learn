class Myarray {
  
  constructor(){
    
    this.length = 0;
    this.data = {};
    
  }
  //method for accessing the array value based on index.
  get(index) {
    
    return this.data[index];
  }
  
  //method for adding item to the end of array.
  push(item){
    
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  
  //method for deleting the item from the end of the array.
  pop() {
    
    delete this.data[this.length-1];
    this.length--;
    return this.length;
  }
  
  //method for deleting the item from a specific index.
  delete(index) {
    
    const item = this.data[index];
    this.shiftItems(index);
    
  }
  
  // shifting of the elements in case of deletion.
    shiftItems(index) {
    
      for(let i = index; i < this.length-1; i++) {
      
         this.data[i] = this.data[i+1];
          
    }
      delete this.data[this.length-1];
      this.length--;
  }

}

var newArray = new Myarray();
console.log(newArray.get(0));
newArray.push('hi');
newArray.push('My');
newArray.push('Name ');
newArray.push('is');
newArray.push('Manish');
newArray.push('Kumar');
console.log('printing....');
console.log(newArray);

console.log('Length of array before  ' + newArray.length);
/*
newArray.pop();
newArray.pop();
newArray.pop();
*/

newArray.shiftItems(2);
//newArray.delete(5);

console.log('Length of array after ' + newArray.length);
