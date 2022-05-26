// ========= STACKS ========== //

/* 
  Data structure which follows: first-in-last-out practice (FILO) 

  EX: => 1 - 2 - 3 (the first entry  is 1 and will be the last entry removed)

  In a stack we are restricted to only being able to perform operations on the 
  top item in the stack. (pop and peek)

  When we add a new item, we can only add it top the top of the stack.

  EX. payload = 4
  stack becomes: => 1 - 2 - 3 - 4

*/




const util = require('util')

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);

    if (this.length === 0) {
      this.top = node;
      this.bottom = this.top;
    } else {

      const holdingPointer = this.top;
      this.top = node;
      this.top.next = holdingPointer
    }

    this.length++;

  }
  peek() {
    return this.top;
  }
  pop() {
    if (!this.top) {
      return null
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
  }
}

const stack = new Stack();

stack.push('google');
stack.push('discord');
stack.push('udemy');

console.log(util.inspect(stack, false, null, true));

stack.pop()

console.log(util.inspect(stack, false, null, true));


class StackWithArray {
  constructor() {
    this.stack = [];
  }
  push(value) {
    const newNode = value
    this.stack.push(newNode)
  }
  peek() {
    return this.stack[this.stack.length - 1]
  }
  pop() {
    this.stack.pop();
  }
}

const stackWithArray = new StackWithArray();

stackWithArray.push('google')
stackWithArray.push('discord')
stackWithArray.push('youtube')

console.log(stackWithArray)
console.log(stackWithArray.peek())

stackWithArray.pop();

console.log(stackWithArray)
console.log(stackWithArray.peek())