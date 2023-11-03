interface Data {
	[key: number]: unknown;
}

class MyArray {
	length: number = 0;
	data: Data = {};

	public constructor() {}

	public get = (index: number) => this.data[index];
	public push(item: unknown) {
		this.data[this.length] = item;
		this.length++;

		return this.data;
	}
}

const MY_ARRAY = new MyArray();

console.log(MY_ARRAY.push('Jose'));
console.log(MY_ARRAY.push('Adriana'));
console.log(MY_ARRAY.get(1));
console.log(MY_ARRAY);

export {};
