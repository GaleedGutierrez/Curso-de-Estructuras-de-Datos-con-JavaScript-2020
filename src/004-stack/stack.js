class MyNode {
	value;
	next;
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class MyStack {
	top;
	bottom;
	length;
	constructor() {
		this.top = new MyNode(null);
		this.bottom = new MyNode(null);
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const NEW_NODE = new MyNode(value);

		if (this.length === 0) {
			this.top = NEW_NODE;
			this.bottom = NEW_NODE;
			this.length++;

			return this;
		}

		const HOLDING_POINTER = this.top;

		this.top = NEW_NODE;
		this.top.next = HOLDING_POINTER;
		this.length++;

		return this;
	}

	pop() {
		const HOLDING_POINTER = this.top?.next;

		if (!HOLDING_POINTER) {
			this.top = new MyNode(null);
			this.bottom = new MyNode(null);
			this.length = 0;

			return this;
		}

		this.top = HOLDING_POINTER;
		this.length--;

		return this;
	}
}
const myStack = new MyStack();

console.log(myStack);
myStack.push(1);
myStack.push(2);
myStack.push(3);
