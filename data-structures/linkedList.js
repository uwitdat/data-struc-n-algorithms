// ============ LINKED LISTS ========= //

/* 
    A linked list data structure is a series of hash tables (Objects)
    which have a reference pointer to another hash table (Object)

    A linked list contains: 
    - a 'head' node which is the first entry into the tree. 
    - a 'tail' entry which represents the last node in the 
    tree and will always point to null

   
    EX:  HEAD: 10 --next--> 15 --next--> 16 --next--> null


    - A singly linked list can point to a 'next' value.
    - A doubly linked list can point to a 'next' value and also to a 'prev' value.

*/



const util = require('util')

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {

    this.head = {
      value: value,
      next: null,
      prev: null
    }

    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
    } else if (index > this.length) {
      console.log('not a valid index');
    } else {
      this.insertNewNode(index, value);
    }
    this.printList();
  }
  insertNewNode(index, value) {
    let leadingNode = this.head;
    const newNode = new Node(value);

    for (let i = 0; i < index - 1; i++) {
      leadingNode = leadingNode.next; // 2 => [1, 10, 5, 16]
    }

    let followingNode = leadingNode.next
    leadingNode.next = newNode;
    newNode.next = followingNode;

    newNode.prev = leadingNode;
    followingNode.prev = newNode

    this.length++;
  }
  printList() {
    const listValues = [];
    let startNode = this.head;

    for (let i = 0; i < this.length; i++) {
      listValues.push(startNode.value);
      startNode = startNode.next;
    }
    return listValues;
  }
  remove(index) {
    let leadingNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      leadingNode = leadingNode.next
    }

    const followingNode = leadingNode.next.next;
    delete leadingNode.next;
    this.length--;

    leadingNode.next = followingNode;
    followingNode.prev = leadingNode
  }
  reverseList() {
    // const reverse = this.printList().reverse();

    // let startNode = this.head;

    // for (let i = 0; i < this.length; i++) {
    //   startNode.value = reverse[i];
    //   startNode = startNode.next;
    // }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
}

const linked = new LinkedList(10);
linked.append(5);
linked.append(16);
linked.prepend(1);

console.log(linked.printList());
linked.insert(2, 99);

console.log(linked.printList());
linked.remove(2);
console.log(linked.printList());

linked.reverseList();
console.log(linked.printList());

// console.log(util.inspect(linked, false, null, true));