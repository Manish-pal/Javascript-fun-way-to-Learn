
class PriorityQueue {

// Initialize the collection
  constructor() {
    this.collection = [ ];
  }

  printCollection() {
    console.log(this.collection);
  }

  enqueue(val) {
    return this.collection.push(val);
  }
  findPriority() {

    var values = this.collection.map(function(keys) {
      console.log('Before returning :::'+keys[1]);
      return keys[1];
      
    });
    console.log('This is the values');
    console.log(values);
    var minpriority = Math.min.apply(null, values);
    console.log('Min priority:  ' + minpriority);
    console.log('Returned val from the array  '+this.collection.find(element => element[1] == minpriority));
    return this.collection.find(element => element[1] == minpriority)


  }

  dequeue() {

    var toBeRemoved = this.findPriority();

    var removePosition = this.collection.indexOf(toBeRemoved);
    this.collection.splice(removePosition,1);
    //returns the key of node ['human', 1]
    return toBeRemoved[0];

  }

  size() {

    return this.collection.length;
  }

  isEmpty() {

    return this.size() === 0;
  }

}
