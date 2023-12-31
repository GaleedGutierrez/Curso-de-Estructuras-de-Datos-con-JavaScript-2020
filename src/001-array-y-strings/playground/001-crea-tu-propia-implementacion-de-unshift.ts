interface Data {
	[key: number]: unknown;
}

export class MyArray {
	length: number;
	data: Data;

	constructor() {
		this.length = 0;
		this.data = {};
	}

	unshift(item: unknown) {
		this.length++;

		for (let i = this.length - 1; i >= 0; i--) {
			this.data[i] = this.data[i - 1];
		}

		this.data[0] = item;

		return this.length - 1;
	}
}
