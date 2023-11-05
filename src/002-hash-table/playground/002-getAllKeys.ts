import { HashTable } from './hashTable';

type key = string;
type value = number;
type TupleData = [key, value];

type Data = TupleData[][];

export class Solution extends HashTable {
	data: Data;
	constructor(size: number) {
		super(size);

		this.data = new Array(size);
	}

	getAllKeys() {
		const HASHES = Object.keys(this.data);
		const keys: string[][] = [];

		for (const ADDRESS of HASHES) {
			const BUCKET = this.data[Number(ADDRESS)];

			keys.push(BUCKET.map((item) => item[0]));
		}

		return keys.flat();
	}
}
