// ====== QUEUE ======= //

/* 
  Data structure which follows: first-in-first-out practice (FIFO) 

  EX: => 1 - 2 - 3 (the first entry is 3 and will be the first entry removed)

  In a queue we are able to perform operations such as: 
  - adding a node (first) to the begining of the queue. (enqueue)

    EX. payload = 4
    queue becomes: => 4 - 1 - 2 - 3

  - removing the node currently at the front of the queue. (dequeue)

    EX. current queue is = 4 - 1 - 2 - 3
    the node at the front of the queue is => 3
    queue becomes: => 4 - 1 - 2 

*/



const util = require('util')

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue { // first in, first out =====>>>> FIFO
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (this.length === 0) {
      return null;
    } else {
      return this.first;
    }
  }
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {

      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }
  dequeue() {
    if (length === 0) {
      return null;
    }
    if (this.first = this.last) {
      return this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const queue = new Queue();


queue.enqueue('joy');
queue.enqueue('matt');
queue.enqueue('pavel');

console.log(queue);
// // console.log(queue.peek());