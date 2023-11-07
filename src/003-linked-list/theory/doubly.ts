class MyNode {
	value: unknown;
	next: this | null;
	prev: this | null;

	constructor(value: unknown) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class MyDoublyLinkedList {
	head: MyNode;
	tail: MyNode;
	length: number;

	constructor(value: unknown) {
		this.head = new MyNode(value);
		this.tail = this.head;
		this.head.prev = this.tail;
		this.length = 1;
	}

	public append(value: unknown) {
		const NEW_NODE = new MyNode(value);

		NEW_NODE.prev = this.tail;
		this.tail.next = NEW_NODE;
		this.tail = NEW_NODE;
		this.length++;

		return this;
	}

	public prepend(value: unknown) {
		const NEW_NODE = new MyNode(value);

		NEW_NODE.next = this.head;
		NEW_NODE.prev = this.tail;
		this.head = NEW_NODE;
		this.length++;

		return this;
	}

	public insert(index: number, value: unknown) {
		if (index >= this.length) return this.append(value);

		if (index <= 0) return this.prepend(value);

		const NEW_NODE = new MyNode(value);
		const FIRST_POINTER = this.#getNodeByIndex(index - 1);
		const HOLDING_POINTER = FIRST_POINTER.next!;

		FIRST_POINTER.next = NEW_NODE;

		HOLDING_POINTER.prev = NEW_NODE;
		NEW_NODE.next = HOLDING_POINTER;
		NEW_NODE.prev = FIRST_POINTER;
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

const MY_LINKED_LIST = new MyDoublyLinkedList(1);

MY_LINKED_LIST.append(2);
MY_LINKED_LIST.prepend(0);
MY_LINKED_LIST.insert(1, 100);

export {};
