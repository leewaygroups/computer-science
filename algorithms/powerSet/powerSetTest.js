var powerSet = require('./powerSet');
var expect = require('chai').expect;

/**
 * Test fails with memory allocation error. Still investigation why and how to resolve this.
 * See below link for possible reason
 * https://github.com/npm/npm/issues/3340
 */
module.exports.PowerSet = function () {
    describe('Power-Set', function () {

        it('should return an array', function () {
           expect(powerSet([1, 2])).to.be.instanceof(Array);
        });

        it('should return an empty array', function () {
           expect(powerSet([])).to.be.empty;
        });

        it('should return array of array equal to [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]', function () {
            expect(twoSum([1, 2, 3])).to.eql([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);
        });
    });
};