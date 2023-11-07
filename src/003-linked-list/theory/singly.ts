// 1 --> 2 --> 3 --> 4 --> 5 --> null

// const SINGLY_LINKED_LIST = {
// 	head: {
// 		value: 1,
// 		next: {
// 			value: 2,
// 			next: {
// 				value: 3,
// 				next: {
// 					value: 4,
// 					next: {
// 						value: 5,
// 						next: null
// 					}
// 				}
// 			}
// 		}
// 	}
// };

class MyNode {
	value: unknown;
	next: this | null;
	constructor(value: unknown) {
		this.value = value;
		this.next = null;
	}
}

class MySinglyLinkedList {
	head: MyNode;
	tail: MyNode;
	length: number;

	constructor(value: unknown) {
		this.head = {
			value,
			next: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	public append(value: unknown) {
		const NEW_NODE = new MyNode(value);

		this.tail.next = NEW_NODE;
		this.tail = NEW_NODE;
		this.length++;

		return this;
	}

	public prepend(value: unknown) {
		const NEW_NODE = new MyNode(value);

		NEW_NODE.next = this.head;
		this.head = NEW_NODE;
		this.length++;

		return this;
	}

	public insert(index: number, value: unknown) {
		if (index >= this.length) return this.append(value);

		if (index <= 0) return this.prepend(value);

		const NEW_NODE = new MyNode(value);
		const FIRST_POINTER = this.#getNodeByIndex(index - 1);
		const HOLDING_POINTER = FIRST_POINTER.next;

		FIRST_POINTER.next = NEW_NODE;
		NEW_NODE.next = HOLDING_POINTER;
		this.length++;

		return this;
	}

	#getNodeByIndex(index: number): MyNode {
		let currentNode = this.head;

		for (let i = 0; i < index; i++) {
			if (currentNode.next === null) break;

			currentNode = currentNode.next;
		}

		return currentNode;
	}
}

const MY_LINKED_LIST = new MySinglyLinkedList(1);

MY_LINKED_LIST.append(2);
MY_LINKED_LIST.append(3);
MY_LINKED_LIST.append(4);
MY_LINKED_LIST.append(5);
MY_LINKED_LIST.prepend(0);
console.log(MY_LINKED_LIST.insert(0, 100));
