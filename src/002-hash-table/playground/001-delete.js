import { HashTable } from "./hashTable";

export class Solution extends HashTable {
	data;
	constructor(size) {
		super(size);
		this.data = new Array(size);
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

	#getBucket(key) {
		const ADDRESS = this.hashMethod(key);
		const CURRENT_BUCKET = this.data[ADDRESS];

		if (!CURRENT_BUCKET) return undefined;

		return CURRENT_BUCKET;
	}
}
