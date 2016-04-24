var twoSum = require('./twoSum_optimized');
var expect = require('chai').expect;

/** two sum tests */
module.exports.TwoSumTest = function() {
    describe('Two-Sum', function () {

        it('should return an array', function () {
            expect(twoSum([3, 5, 2, -4, 8, 11], 7)).to.be.instanceof(Array);
        });

        it('should return an empty array', function () {
            expect(twoSum([3, 5], 7)).to.be.empty;
        });

        it('should return array of array equal to [ [ 2, 5 ], [ 11, -4 ] ]', function () {
            expect(twoSum([3, 5, 2, -4, 8, 11], 7)).to.eql([[2, 5], [11, -4]]);
        });
    });
};