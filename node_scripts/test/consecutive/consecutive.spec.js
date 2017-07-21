import {expect} from 'chai';
import * as consecutive from '../../consecutive';

describe('consecutive', () => {

	it('gets the expected range', () => {
		let expected = [0,1,2,3];
		let actual = consecutive.getRange(4);
	});

	let testIndexes = [
		{consecutiveCount : 3, indexCount : 9, expected : [[0,1,2], [1,2,3], [2,3,4], [3,4,5], [4,5,6], [5,6,7], [6,7,8]] },
		{consecutiveCount : 2, indexCount : 8, expected : [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7]] },
		{consecutiveCount : 4, indexCount : 8, expected : [[0,1,2,3], [1,2,3,4], [2,3,4,5], [3,4,5,6], [4,5,6,7]] },
	];

	testIndexes.forEach(function(test) {
		it('gets the element indexes to concatenate', () => {
			
			let actual = consecutive.getIndexesToConcatenate(test);

			expect(actual).to.eql(test.expected);
		});
	});

	it('get consecutively concatenated strings', () => {
		let indexes = [
			{
				arr : ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
				expected : ["zoneabigail", "abigailtheta", "thetaform", "formlibe", "libezas", "zastheta", "thetaabigail"],
				consecutiveCount : 2,
				indexCount: 8
			}
		];
		let actual = consecutive.getConsecutiveStringsByLength(indexes[0]);
		expect(actual).to.eql(indexes[0].expected);
	});

});

/*
1+2 2+3 3+4 
1+2+3 2+3+4 4+5+6
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2);
*/

