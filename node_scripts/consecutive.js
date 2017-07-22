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
 
/*
 * this is what actually worked
const getRange = (n) => [...Array(n).keys()];

const getConsecutiveStringsByLength = (indexes) => {
	const concatenate = (acc, el) => acc + el

	let indexesToConcatenate = getIndexesToConcatenate(indexes);
  // console.log('indexesToConcatenate', indexesToConcatenate)
	let matched = indexesToConcatenate.map(index => index.map(el => indexes.arr[el])).filter(x=>x.every(y=>typeof(y)!='undefined'));
  // console.log('matched', matched)
	let concatenated = matched.map(x => x.reduce(concatenate));
	return concatenated;
}


const longestConsec = (strarr, k) => {
	let n = strarr.length;
  if (!strarr || n < 1 || k < 1) {
  	return "";
  }
    
	const buildConsecutiveLengths = (el) => {
		return {str: el, len: el.length};
	}

	const getLengths = (el) => el.len

	const maxLengths = (el) => el.len === max

	let info = {arr: strarr, consecutiveCount: k, indexCount: n};
	let consecutiveStrings = getConsecutiveStringsByLength(info);
  // console.log('consecutiveStrings', consecutiveStrings);
	let consecutiveLengths = consecutiveStrings.map(buildConsecutiveLengths);
	let max = Math.max(...consecutiveLengths.map(getLengths));
	let filtered = consecutiveLengths.filter(maxLengths);
  if (typeof(filtered[0]) != 'undefined') {
    return filtered[0].str; // hopefully everything stays sorted the same way ...
  }
  else {
  	return "";
 } 
}

const getIndexesToConcatenate = (indexes) => {
	// console.log('math', indexes.indexCount - (indexes.consecutiveCount-2))
	// console.log('indexes.indexCount', indexes.indexCount)
	// console.log('indexes.consecutiveCount', indexes.consecutiveCount)
	let rangeLength = indexes.consecutiveCount <= indexes.indexCount 
    ? indexes.indexCount - (indexes.consecutiveCount-2) // -2 because 1 for 0 indexing, 1 more to skip the last element
    : indexes.indexCount - 1;
	let range = getRange(rangeLength); 
	return range.map((el, ix) => {
		let a = [];
		let range = getRange(indexes.consecutiveCount);
		range.map(i => a.push(ix + i))
		return a;
	}
	)
}
 
// and these were the test cases:
function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

Test.describe("longestConsec",function() {
Test.it("Basic tests",function() { 
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    testing(longestConsec([], 3), "")
    testing(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    testing(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
})})

look at what someone else put!! it was this easy?!?
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}
 */
