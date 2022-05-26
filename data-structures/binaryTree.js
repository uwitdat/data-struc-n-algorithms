// ====== BINARY TREES ======== //

/* 
  A binary tree is a data structure which follows a specific rule set.

  - There is a root node which is the parent of the tree.

  - Each node is able to have up to two child nodes:
    - Left: a value smaller than the parent's
    - Right: a value larger than the parent's
 
          EX:

           9
         /   \
        /     \
       /       \
      /         \
     4           20
   /   \        /  \
 1       6    15    170

*/

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node;
    } else {
      this.traverseTreeAndInsert(this.root, node);
    }

  }
  lookup(value) {
    if (!this.root) {
      return null
    }
    return this.traverseTreeAndReturn(this.root, value)

  }
  traverseTreeAndInsert(node, insertValue) {
    if (insertValue.value < node.value && !node.left) {
      node.left = insertValue;
    } else if (insertValue.value > node.value && !node.right) {
      node.right = insertValue
    } else if (insertValue.value < node.value && node.left) {
      this.traverseTreeAndInsert(node.left, insertValue)
    } else if (insertValue.value > node.value && node.right) {
      this.traverseTreeAndInsert(node.right, insertValue)
    }
  }
  traverseTreeAndReturn(node, lookupValue) {

    if (lookupValue === node.value) {
      return `FOUND =>>> ${node.value}`
    }
    else if (lookupValue < node.value && node.left) {
      return this.traverseTreeAndReturn(node.left, lookupValue)
    }
    else if (lookupValue > node.value && node.right) {
      return this.traverseTreeAndReturn(node.right, lookupValue)
    }
    else {
      return 'Value not found'
    }
  }
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)

tree.insert(15)
tree.insert(170)
console.log(JSON.stringify(tree)) // paste in browser console to view tree

console.log(tree.lookup(6))
