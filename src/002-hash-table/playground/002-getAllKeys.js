import { HashTable } from "./hashTable";

export class Solution extends HashTable {
	data;
	constructor(size) {
		super(size);
		this.data = new Array(size);
	}

	getAllKeys() {
		const HASHES = Object.keys(this.data);
		const keys = [];

		for (const ADDRESS of HASHES) {
			const BUCKET = this.data[Number(ADDRESS)];

			keys.push(BUCKET.map((item) => item[0]));
		}

		return keys.flat();
	}
}
