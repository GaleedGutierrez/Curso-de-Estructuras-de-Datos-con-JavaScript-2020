import { MyArray } from "./MyArray";

export class BetterArray extends MyArray {
	length;
	data;
	constructor() {
		super();
		this.length = 0;
		this.data = {};
	}

	pop() {
		const LAST_ITEM = this.data[this.length - 1];

		delete this.data[this.length - 1];
		this.length--;

		return LAST_ITEM;
	}

	shiftIndex(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}

		this.pop();
	}

	shift() {
		const FIRST_ITEM = this.data[0];

		this.shiftIndex(0);

		return FIRST_ITEM;
	}
}
