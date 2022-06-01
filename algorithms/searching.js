// ======== SEARCHING  ========= //

/*
    Types of search algorithms:

    1. Linear search:
     - worst case we check all items in the data set.
     - Wil be too slow to use when data set is large/ larger. O(n)

    2. Binary search:
     - If data set is sorted we can discard half the items instead of 
     querying one at a time. (Divide and conquer) O(log n)


     For tree or graph traversal we can use: 

    3. Breadth First Search (BFS)
     - Works by visiting nodes left to right, level by level.
     - Keep going until we find the value, or the tree ends.
     - Could potentialy be used is target node is in upper level
     of tree

     PROS:
        - Shortest path
        - Closer Nodes
     CONS: 
        - More memory

     EXAMPLES OF WHEN TO USE: 
     - You know the solution is not far from the root of the tree
     - The tree is deep and solutions are rare (DFS will take too long)
     - Finding the shortest path

    4. Depth First Search (DFS)
     - Follows branch of tree down as many levels as possible,
     until node is found or not.
     - If node is not found. Search continues at nearest ancestor, 
     with an unexplored child.
     - Is more memory efficient than BFS
     - Could potentialy be used is target node is in lower level
     of tree
     PROS:
     - Less memory
     - Does the path exist from source to target?
     CONS: 
     - Can get slow, especially if tree/graph is deep

     EXAMPLES OF WHEN TO USE: 
     - If the tree is very wide (BFS wil use too much memory)
     - If solutions are frequent and located deep in the tree
     - Determine wether path between two nodes exists

*/

const util = require('util')

const tree = {
  root: {
    value: 9,
    left: {
      value: 4,
      left: {
        value: 1,
        left: null,
        right: null
      },
      right: {
        value: 6,
        left: null,
        right: null
      }
    },
    right: {
      value: 20,
      left: {
        value: 15,
        left: null,
        right: null
      },
      right: {
        value: 170,
        left: null,
        right: null
      }
    }
  }
}

// console.log(util.inspect(tree, false, null, true));


function breadFirstSearch(tree) {
  let currentNode = tree.root;
  let list = [];
  let queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift(); // => returns and removes first item in queue
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return list;
}

function breadFirstSearchRecursive(queue, list) {
  if (queue.length === 0) {
    return list;
  }

  let currentNode = queue.shift();
  list.push(currentNode.value);

  if (currentNode.left) {
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }

  return breadFirstSearchRecursive(queue, list);
}

console.log(breadFirstSearch(tree));
console.log(breadFirstSearchRecursive([tree.root], []));


function depthFirstSearchInOrder(node, list) {
  if (node.left) {
    depthFirstSearchInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    depthFirstSearchInOrder(node.right, list);
  }

  return list;
}


function depthFirstSearchPreOrder(node, list) {
  list.push(node.value);

  if (node.left) {
    depthFirstSearchPreOrder(node.left, list);
  }
  if (node.right) {
    depthFirstSearchPreOrder(node.right, list);
  }
  return list;
}

function depthFirstSearchPostOrder(node, list) {

  if (node.left) {
    depthFirstSearchPostOrder(node.left, list);
  }
  if (node.right) {
    depthFirstSearchPostOrder(node.right, list);
  }
  list.push(node.value);

  return list;
}


console.log('in order=>', depthFirstSearchInOrder(tree.root, []));
console.log('pre order =>', depthFirstSearchPreOrder(tree.root, []));
console.log('post order =>', depthFirstSearchPostOrder(tree.root, []));


function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {

    const middle = start + Math.floor((end - start) / 2);

    if (value === array[middle]) {
      return 'found => ' + value;
    }

    if (value < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}


function binaryTwo(val, array) {
  let clone = [...array];

  for (let i = 1; i <= array.length; i++) {
    if (!clone.length) break;

    let end = clone.length - 1;
    let middle = Math.round((end - 0) / 2);

    if (clone[middle] === val) {
      return 'FOUND => ' + val + ' ' + 'on try: ' + i;
    }

    if (val > clone[middle]) {
      clone = clone.slice(middle + 1);
    } else {
      clone = clone.slice(0, middle);
    }
  }

  return -1;
}


console.log('binary two =>',
  binaryTwo(1000, [1, 4, 6, 9, 15, 20, 170, 300, 560, 900, 1000])
);

console.log('binary: =>',
  binarySearch([1, 4, 6, 9, 15, 20, 170], 15)
);