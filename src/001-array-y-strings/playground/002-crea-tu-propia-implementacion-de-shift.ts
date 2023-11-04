import { MyArray } from './MyArray';

interface Data {
	[key: number]: unknown;
}

export class BetterArray extends MyArray {
	length: number;
	data: Data;

	constructor() {
		super();
		this.length = 0;
		this.data = {};
	}

	public pop() {
		const LAST_ITEM = this.data[this.length - 1];

		delete this.data[this.length - 1];
		this.length--;

		return LAST_ITEM;
	}

	public shiftIndex(index: number) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}

		this.pop();
	}

	public shift() {
		const FIRST_ITEM = this.data[0];

		this.shiftIndex(0);

		return FIRST_ITEM;
	}
}
