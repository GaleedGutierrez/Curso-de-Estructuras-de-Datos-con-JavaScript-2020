class HashTable {
	data;
	constructor(size) {
		this.data = new Array(size);
	}

	hashMethod(key) {
		let hash = 0;

		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}

		return hash;
	}

	set(key, value) {
		const ADDRESS = this.hashMethod(key);

		if (!this.data[ADDRESS]) {
			this.data[ADDRESS] = [];
		}

		this.data[ADDRESS].push([key, value]);

		return this.data;
	}
}
const MY_HASH_TABLE = new HashTable(50);

console.log(MY_HASH_TABLE);
console.log(MY_HASH_TABLE.set("Diego", 1990));
console.log(MY_HASH_TABLE.set("Mariana", 1998));
console.log(MY_HASH_TABLE.set("Galeed", 2001));
