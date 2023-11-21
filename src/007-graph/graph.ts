interface AdjacentList {
	[key: number]: number[];
}

class Graph {
	// eslint-disable-next-line no-unused-private-class-members
	#nodes: number;
	#adjacentList: AdjacentList;

	public constructor() {
		this.#nodes = 0;
		this.#adjacentList = {};
	}

	public addVertex(node: number) {
		this.#adjacentList[node] = [];
		this.#nodes++;

		return this;
	}

	public addEdge(node1: number, node2: number) {
		this.#adjacentList[node1].push(node2);
		this.#adjacentList[node2].push(node1);

		return this;
	}
}

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
const myGraph = new Graph();

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
