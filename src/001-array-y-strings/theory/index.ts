interface Data {
	[key: number]: unknown;
}

class MyArray {
	#length: number = 0;
	#data: Data = {};

	public constructor() {}

	public get = (index: number) => this.#data[index];

	public getAll = () => this.#data;

	public push(item: unknown) {
		this.#data[this.#length] = item;
		this.#length++;

		return this.#data;
	}

	public pop() {
		const LAST_ITEM = this.#data[this.#length - 1];

		delete this.#data[this.#length - 1];
		this.#length--;

		return LAST_ITEM;
	}

	public myDelete(index: number) {
		const ITEM = this.#data[index];

		this.shiftIndex(index);

		return ITEM;
	}

	public shiftIndex(index: number) {
		for (let i = index; i < this.#length - 1; i++) {
			this.#data[i] = this.#data[i + 1];
		}

		this.pop();
	}

	public unshift(item: unknown) {
		this.#length++;

		for (let i = this.#length - 1; i >= 0; i--) {
			this.#data[i] = this.#data[i - 1];
		}

		this.#data[0] = item;

		return this.#data[0];
	}

	public shift() {
		const FIRST_ITEM = this.#data[0];

		this.shiftIndex(0);

		return FIRST_ITEM;
	}
}

const MY_ARRAY = new MyArray();

console.log(MY_ARRAY.push('Jose'));
console.log(MY_ARRAY.push('Axel'));
console.log(MY_ARRAY.push('Pepe'));
console.log(MY_ARRAY.unshift('Bibiana'));
console.log(MY_ARRAY.getAll());
console.log(MY_ARRAY.shift());
console.log(MY_ARRAY.getAll());
// console.log(MY_ARRAY.shiftIndex(1));
// console.log(MY_ARRAY.getAll());

export {};
