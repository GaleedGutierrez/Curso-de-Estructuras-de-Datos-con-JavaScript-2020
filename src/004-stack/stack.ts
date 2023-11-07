class MyNode {
	value: unknown;
	next: this | null;

	constructor(value: unknown) {
		this.value = value;
		this.next = null;
	}
}

class MyStack {
	top: MyNode | null;
	bottom: MyNode | null;
	length: number;

	public constructor() {
		this.top = new MyNode(null);
		this.bottom = new MyNode(null);
		this.length = 0;
	}

	public peek() {
		return this.top;
	}

	public push(value: unknown) {
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

	public pop() {
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
