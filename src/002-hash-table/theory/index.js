class HashTable {
	#data;
	constructor(size) {
		this.#data = new Array(size);
	}

	set(key, value) {
		const ADDRESS = this.#hashMethod(key);

		if (!this.#data[ADDRESS]) {
			this.#data[ADDRESS] = [];
		}

		this.#data[ADDRESS].push([key, value]);

		return this.#data;
	}

	get(key) {
		const CURRENT_BUCKET = this.#getBucket(key);

		if (!CURRENT_BUCKET) return undefined;

		const FOUND_BUCKET = CURRENT_BUCKET.find((item) => item[0] === key);
		const VALUE = FOUND_BUCKET ? FOUND_BUCKET[1] : undefined;

		return VALUE;
	}

	delete(key) {
		const CURRENT_BUCKET = this.#getBucket(key);

		if (!CURRENT_BUCKET) return undefined;

		const DELETE_INDEX = CURRENT_BUCKET.findIndex(
			(item) => item[0] === key
		);
		const DELETED_ITEM = CURRENT_BUCKET.splice(DELETE_INDEX, 1)[0];

		return DELETED_ITEM;
	}

	getAll = () => this.#data;
	getAllKeys() {
		const HASHES = Object.keys(this.#data);
		const keys = [];

		for (const ADDRESS of HASHES) {
			const BUCKET = this.#data[Number(ADDRESS)];

			keys.push(BUCKET.map((item) => item[0]));
		}

		return keys.join();
	}

	#hashMethod(key) {
		let hash = 0;

		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.#data.length;
		}

		return hash;
	}

	#getBucket(key) {
		const ADDRESS = this.#hashMethod(key);
		const CURRENT_BUCKET = this.#data[ADDRESS];

		if (!CURRENT_BUCKET) return undefined;

		return CURRENT_BUCKET;
	}
}
const MY_HASH_TABLE = new HashTable(50);

console.log(MY_HASH_TABLE);
console.log(MY_HASH_TABLE.set("Diego", 1990));
console.log(MY_HASH_TABLE.set("Mariana", 1998));
console.log(MY_HASH_TABLE.set("Galeed", 2001));
console.log(MY_HASH_TABLE.set("Midu", 2004));
console.log(MY_HASH_TABLE.set("Zoom", 2004));
console.log(MY_HASH_TABLE.get("XD")); // Undefined
console.log(MY_HASH_TABLE.get("Galeed"));
console.log(MY_HASH_TABLE.get("Diego"));
console.log(MY_HASH_TABLE.get("Mariana"));
console.log(MY_HASH_TABLE.delete("Diego"));
// console.log(MY_HASH_TABLE.get('Diego'));
console.log(MY_HASH_TABLE);
console.log(MY_HASH_TABLE.getAllKeys());
