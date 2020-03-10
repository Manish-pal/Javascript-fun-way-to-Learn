/*
Implemented simple hash table to understand how it works and to avoid the collison.
*/

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key,value) {

    var address = this._hash(key);
    //console.log(address);
    if(!this.data[address]) {  //checks if there is anything exists on this memory location

    //declares an empty array in the data array's address index.
    this.data[address] = [];
    //adds another array on the address index.
    this.data[address].push([key, value]); 
    //console.log(this.data);
    } else {
      //adds the new entry to the same index without deleting the previous data TO AVOID COLLISION
      this.data[address].push([key, value]);
    }
    return this.data;

  }


  get(key) {

    var address = this._hash(key);
    var currentBucket = this.data[address];

    if(currentBucket) {

      for(let i = 0; i < currentBucket.length; i++) {

        if(currentBucket[i][0] === key){

          return currentBucket[i][1];
        }
      }
    } else {

        return undefined;

    }

  }
}

const myHashTable = new HashTable(50);

myHashTable.set('apple', 9)
myHashTable.set('Mango', 675);
myHashTable.set('Cherry', 45);
myHashTable.set('grapes', 10000);
myHashTable.set('Banana', 344);
myHashTable.set('Orange',932);

myHashTable.get('apple');
myHashTable.get('Mango');
myHashTable.get('Cherry');
myHashTable.get('grapes');
myHashTable.get('Banana');
myHashTable.get('Orange');
