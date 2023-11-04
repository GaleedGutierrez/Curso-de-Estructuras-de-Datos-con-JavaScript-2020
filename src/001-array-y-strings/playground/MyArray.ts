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
		if (!item) {
			return this.length;
		}

		if (this.length === 0) {
			this.data[0] = item;

			this.length++;

			return this.length;
		}

		for (let i = this.length; i > 0; i--) {
			this.data[i] = this.data[i - 1];
		}

		this.data[0] = item;

		this.length++;

		return this.length;
	}
}
