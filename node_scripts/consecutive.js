export const getRange = (n) => [...Array(n).keys()];

export const longestConsec = (strarr, k) => {
	let n = strarr.length;

	const getOffset = (k) => [...Array(Math.floor(strarr.length / k)).keys()];
	let offset = getOffset(k);
	const eachN = (el, ix) => {
		 return {start: 0+ix*k, end: (k-1)+ix*k};
	}
	var ranges = offset.map(eachN);

	/*
	const consecutiveN = (el, ix) => {
		return ix >= range.start && ix <= range.end;
	}
	*/

	let filtered = ranges.map(range => {
		return strarr.filter((el, ix) => ix >= range.start && ix <= range.end); // consecutiveN
	});

	console.log(filtered);
}
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2);

export const getConsecutiveStringsByLength = (indexes) => {
	let indexesToConcatenate = getIndexesToConcatenate(indexes);
	let matched = indexesToConcatenate.map(index => index.map(el => indexes.arr[el]));
	let concatenated = matched.map(x => x.reduce((acc, el) => acc + el));
	return concatenated;
}

export const getIndexesToConcatenate = (indexes) => {
	let range = getRange(indexes.indexCount - (indexes.consecutiveCount-1)); // -2 because 1 for 0 indexing, 1 more to skip the last element
	return range.map((el, ix) => {
		let a = [];
		for (let i = 0; i < indexes.consecutiveCount; i++) {
			a.push(ix + i);
		}
		//[ix, ix + 1, ix + 2]);
		return a;
	}
	)
}

