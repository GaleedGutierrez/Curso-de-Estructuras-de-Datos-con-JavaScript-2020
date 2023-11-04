export class MyArray {
	length;
	data;
	constructor() {
		this.length = 0;
		this.data = {};
	}

	unshift(item) {
		this.length++;

		for (let i = this.length - 1; i >= 0; i--) {
			this.data[i] = this.data[i - 1];
		}

		this.data[0] = item;

		return this.length - 1;
	}
}
