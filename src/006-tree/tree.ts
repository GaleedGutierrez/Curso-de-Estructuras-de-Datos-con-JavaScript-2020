// 	  	 10
//   4		  20
// 2	8	17	170

class MyNode {
	left: this | null;
	right: this | null;
	value: number;

	constructor(value: number) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	root: MyNode | null;

	public constructor() {
		this.root = null;
	}

	public insert(value: number) {
		const NEW_NODE = new MyNode(value);

		if (this.root === null) {
			this.root = NEW_NODE;
		} else {
			let currentNode = this.root;

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

	public search() {
		// while (value !== )
	}
}

const myTree = new BinarySearchTree();

myTree.insert(10);
myTree.insert(4);
myTree.insert(20);
console.log(myTree);

export {};
