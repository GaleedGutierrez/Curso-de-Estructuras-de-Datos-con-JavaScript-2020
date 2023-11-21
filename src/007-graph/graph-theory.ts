/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/*
    2 -- 0
  /  \
 1 -- 3
*/
// Edge List
const GRAPH: number[][] = [
	[0, 2],
	[2, 3],
	[2, 1],
	[1, 3]
];

// Adjacent List
// Index:
// 0: [2]
// 1: [2, 3]
// 2: [0, 1, 3]
// 3: [1, 2]
const GRAPH_AL: number[][] = [[2], [2, 3], [0, 1, 3], [1, 2]];

const GRAPH_AL_2 = {
	0: [2],
	1: [2, 3],
	2: [0, 1, 3],
	3: [1, 2]
};

// Adjacent Matrix
const GRAPH_AM = [
	[0, 0, 1, 0],
	[0, 0, 1, 1],
	[1, 1, 0, 1],
	[0, 1, 1, 0]
];

const GRAPH_AMO = {
	0: [0, 0, 1, 0],
	1: [0, 0, 1, 1],
	2: [1, 1, 0, 1],
	3: [0, 1, 1, 0]
};
