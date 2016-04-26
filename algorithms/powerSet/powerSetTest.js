var powerSet = require('./powerSet');
var expect = require('chai').expect;

module.exports.PowerSet = function () {
    describe('Power-Set', function () {

        it('should return an array', function () {
           expect(powerSet([1, 2])).to.be.instanceof(Array);
        });

        it('should return an empty array', function () {
           expect(powerSet([]).length).to.equal(1);
           expect(powerSet([])[0]).to.be.empty;
        });

        it('should return array of array equal to [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]', function () {
            expect(powerSet([1, 2, 3])).to.eql([ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]);
        });
    });
};