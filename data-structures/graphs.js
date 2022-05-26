// ====== GRAPHS ====== //

/*  
    a graph data structure can be:

    - directional: pointing to another node.
    - undirectional: not pointing to another node.

    - cyclic (verticies are connected and can lead back to eachother).
    - acyclic (verticies are not connected and can not lead back to eachother).

    - weighted: pointers or verticies to other nodes can store information.
    - unweighted: pointers to other nodes do not store data.
    
    Ex:

       2 ----- 0
      / \
     /   \
    /     \
   1 ----- 3

*/


//Edge List => maps all graph connections in 2D array
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

//Adjacent Lists  => index represets graph value, all connections to that value are inside array
const graphTwo = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix => key represents graph value. Array indexes represent all other values in graph.
// 0 represents no connection between key and that value, 1 represents a valid connection. 

const graphThree = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
}
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {}
  };

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    } else {
      console.log(`${node} already exists in graph`);
    }
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    for (const value in this.adjacentList) {
      console.log(`${value} --> ${this.adjacentList[value].join(' ')}`);
    }
  }
}

const myGraph = new Graph();

// Creating entries
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);

// Adding connections between nodes
myGraph.addEdge(3, 1);
myGraph.addEdge(3, 4);
myGraph.addEdge(4, 2);
myGraph.addEdge(4, 5);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 0);
myGraph.addEdge(0, 2);
myGraph.addEdge(6, 5);

console.log(myGraph);

myGraph.showConnections();