class Graph {
	// eslint-disable-next-line no-unused-private-class-members
	#nodes;
	#adjacentList;
	constructor() {
		this.#nodes = 0;
		this.#adjacentList = {};
	}

	addVertex(node) {
		this.#adjacentList[node] = [];
		this.#nodes++;

		return this;
	}

	addEdge(node1, node2) {
		this.#adjacentList[node1].push(node2);
		this.#adjacentList[node2].push(node1);

		return this;
	}
}
// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
const myGraph = new Graph();

// function algoritmo(entrada) {
// 	const salida = {};

// 	if (true) {
// 	}

// 	for (let index = 0; index < array.length; index++) {}

// 	otraFuncion();

// 	return salida;
// }

myGraph.addVertex(1);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addVertex(8);
myGraph.addEdge(3, 5);
myGraph.addEdge(6, 3);
myGraph.addEdge(1, 6);
myGraph.addEdge(1, 3);
myGraph.addEdge(1, 4);
myGraph.addEdge(4, 5);
myGraph.addEdge(4, 8);
