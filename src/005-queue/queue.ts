class MyNode {
	value: unknown;
	next: this;

	constructor(value: unknown) {
		this.value = value;
		this.next = this;
	}
}

class MyQueue {
	first: MyNode;
	last: MyNode;
	length: number;

	public constructor() {
		this.first = new MyNode(null);
		this.last = new MyNode(null);
		this.length = 0;
	}

	public peek() {
		return this.first;
	}

	public enqueue(value: unknown) {
		const NEW_NODE = new MyNode(value);

		if (this.length === 0) {
			this.first = NEW_NODE;
			this.last = NEW_NODE;
			this.length++;

			return this;
		}

		this.last.next = NEW_NODE;
		this.last = NEW_NODE;
		this.length++;

		return this;
	}

	public dequeue() {
		if (this.length === 0) return this;

		if (this.length === 1) {
			this.first = new MyNode(null);
			this.last = new MyNode(null);
			this.length--;

			return this;
		}

		const HOLDING_POINTER = this.first.next;

		this.first = HOLDING_POINTER;
		this.length--;

		return this;
	}
}

const myQueue = new MyQueue();

console.log(myQueue);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();

export {};
