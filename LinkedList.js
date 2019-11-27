const _Node = require('./_Node');

class LinkedList{

  constructor(){
    this.head = null;
    this.length = 0;
  }

  insertFirst(item){
    // Insert an item in the begining of the LinkedList
    this.head = new _Node(item, this.head);
    this.length++;
  }

  insertLast(item){
    // Insert an item at the end of the LinkedList

    // In case our LinkedList is empty add the item at the first position
    if(this.isEmpty()){
      this.insertFirst(item);
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = new _Node(item);
    this.length++;
  }

  remove(index){
    // Remove the item from index passed as parameter in the LinkedList
    if(index < 0 || index > this.length-1){
      throw new Error(`Index out of bounds`);
    }

    let current = this.head
    let previous;
    let position = 0;
    while(position !== index){
      previous = current;
      current = current.next;
      position++;
    }
    previous.next = current.next;
    this.length--;
  }

  display(){
    let list = [];
    
    // If it is an empty linked list
    if(this.isEmpty()){
      return list;
    }

    let current = this.head
    while(current.next){
      list.push(current.value);
      current = current.next;
    }

    // add the last item to the list as the loops exits when it finds last node set to null
    list.push(current.value);
    return list;
  }

  isEmpty(){
    // returns true if the list is empty by checking if the head is pointing to a null
    if(!this.head)
      return true;

    return false;
  }

  // ASK BONARD ABOUT THIS 
  size(){
    // returns the length of the linked listl
    return this.length;
  }

  findLast(){
    // returns the last node in the linked list
    if(this.isEmpty()){
      return null;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }

    return current;
  }

  findPrevious(){
    // finds the node before the item you are looking for
  }

  find(value){
    // return the index of the value found, else return -1
    let current = this.head
    let position = 0

    while(value !== current.value && position < this.length-1) {
      current = current.next
      position++
    }

    if(value !== current.value){
      position = -1;
    }

    return position;
  }

  removeNodeUsingValue(value){
    const indexOfValue = this.find(value);
    if(indexOfValue !== -1){
      this.remove(indexOfValue);
      return this.display();
    }else{
      return `${value} is not present in the LinkedList`;
    }
  }


  insertBefore(locationValue, newValue){
    // inserts a new node before a given node containing a key.
    if(!this.head) {
      this.insertFirst(newValue);
    } else {
      let currNode = this.head;
      while(currNode !== null && currNode.next.value !== locationValue) {
        currNode = currNode.next;
      }
      currNode.next = new _Node(newValue, currNode.next);
    }
    this.length++;
  }

  insertAfter(locationValue, newValue){
    // inserts a new node after a node containing the key
    if(!this.head){
      this.insertAfter(newValue)
    }
    else{
      let currNode = this.head;
      while(currNode !== null && currNode.value !== locationValue){
        currNode = currNode.next
      }
      currNode.next = new _Node(newValue, currNode.next )
    }
    this.length++;
  }

  insertAt(position, newValue){
    // if(position < 0 || index > this.length-1){
    //   throw new Error(`Index out of bounds`);
    // }
    // inserts an item at a specific position in the linked list.
    if(position < 0 || position > this.length){
      throw new Error(`Index out of bounds`);
    }

    if(position === 0){
      this.insertFirst(newValue)
      return;
    }

    if(position === this.length){
      this.insertLast(newValue)
      return;
    }

    let currPosition = 0
    let currNode = this.head;
    while(position > currPosition){
      currNode = currNode.next;
      currPosition++;
    }
    this.insertBefore(currNode.value, newValue) 
  }

  reverseIteratively(){

    if(this.isEmpty())
      return;

    if(this.length === 1){
      return this.head;
    }

    let current = this.head;
    let reverseList = new LinkedList;
    // find last node
    while(current.next){
      reverseList.insertFirst(current.value);
      current = current.next;
    }
    reverseList.insertFirst(current.value);
    this.head = reverseList.head;
  }

  reverseRecursively(current = this.head, reverseList = new LinkedList){

    if(this.isEmpty())
      return;

    if(this.length === 1){
      return this.head;
    }

    if(!current.next){
      reverseList.insertFirst(current.value);
      this.head = reverseList.head;
      return;
    }

    reverseList.insertFirst(current.value);
    this.reverseRecursively(current.next, reverseList);
  }

  
  
  thirdLastItem(){
    // An algorithm to find the 3rd element from the end of a linked list. Without using the length property.

    if(this.isEmpty())
      return `List is empty`;
    
    let thirdLastNode;
    let current = this.head;
    let currPosition = 0;

    while(current.next){
      if(currPosition === 2){
        thirdLastNode = this.head;
      }
      if(currPosition > 2){
        thirdLastNode = thirdLastNode.next;
      }
      current = current.next
      currPosition++;
    }

    if(currPosition === 2){
      return this.head.value;
    } else if(currPosition < 2){
      return `List has less than three items`
    } 
    
    return thirdLastNode.next.value;
  }

  middleOfList(){
    // an algorithm to find the middle element of a linked list. 

    if(this.isEmpty()){
      return `List is empty`;
    }

    let currNode = this.head;
    let currPosition = 0;
    let middleNode = this.head;

    while(currNode.next){
      // Move the middle pointer only when 
      // you will have moved the current poitner 
      // by two places
      if(currPosition % 2 === 0)
        middleNode = middleNode.next;

      currNode = currNode.next;
      currPosition++;
    }    

    return middleNode.value;
  }
}

module.exports = LinkedList;
