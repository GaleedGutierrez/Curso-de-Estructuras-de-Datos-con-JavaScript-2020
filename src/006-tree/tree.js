// 	  	 10
//   4		  20
// 2	8	17	170
class MyNode {
	left;
	right;
	value;
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}
class BinarySearchTree {
	root;
	constructor() {
		this.root = null;
	}

	insert(value) {
		const NEW_NODE = new MyNode(value);

		if (this.root === null) {
			this.root = NEW_NODE;
		} else {
			let currentNode = this.root;

			// eslint-disable-next-line no-constant-condition
			while (true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = NEW_NODE;

						return this;
					}

					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = NEW_NODE;

						return this;
					}

					currentNode = currentNode.right;
				}
			}
		}
	}

	search() {
		// while (value !== )
		//     ;
	}
}
const myTree = new BinarySearchTree();

myTree.insert(10);
myTree.insert(4);
myTree.insert(20);
console.log(myTree);

export {};
