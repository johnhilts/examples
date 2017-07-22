export const getRange = (n) => [...Array(n).keys()];


export const longestConsec = (strarr, k) => {
	const buildConsecutiveLengths = (el) => {
		return {str: el, len: el.length};
	}

	const getLengths = (el) => el.len

	const maxLengths = (el) => el.len === max

	let n = strarr.length;
	let info = {arr: strarr, consecutiveCount: k, indexCount: n};
	let consecutiveStrings = getConsecutiveStringsByLength(info);
	let consecutiveLengths = consecutiveStrings.map(buildConsecutiveLengths);
	let max = Math.max(...consecutiveLengths.map(getLengths));
	let filtered = consecutiveLengths.filter(maxLengths);
	return filtered[0].str; // hopefully everything stays sorted the same way ...
}

export const getConsecutiveStringsByLength = (indexes) => {
	const concatenate = (acc, el) => acc + el

	let indexesToConcatenate = getIndexesToConcatenate(indexes);
	let matched = indexesToConcatenate.map(index => index.map(el => indexes.arr[el]));
	let concatenated = matched.map(x => x.reduce(concatenate));
	return concatenated;
}

export const getIndexesToConcatenate = (indexes) => {
	let range = getRange(indexes.indexCount - (indexes.consecutiveCount-1)); // -2 because 1 for 0 indexing, 1 more to skip the last element
	return range.map((el, ix) => {
		let a = [];
		let range = getRange(indexes.consecutiveCount);
		range.map(i => a.push(ix + i), [])
		// let reduced = [Number(range.reduce((acc, el) => acc + [ix + el], []))]
		// console.log('reduced', reduced);
		// return reduced;
		return a;
	}
	)
}

