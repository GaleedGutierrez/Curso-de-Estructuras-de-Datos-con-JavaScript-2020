class MyArray {
	length = 0;
	data = {};
	constructor() {}
	get = (index) => this.data[index];
	push(item) {
		this.data[this.length] = item;
		this.length++;

		return this.data;
	}
}
const MY_ARRAY = new MyArray();

console.log(MY_ARRAY.push("Jose"));
console.log(MY_ARRAY.push("Adriana"));
console.log(MY_ARRAY.get(1));
console.log(MY_ARRAY);

export {};
