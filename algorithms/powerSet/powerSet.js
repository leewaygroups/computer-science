/**
 * 1. Given a set/array say arr = [1,2,3]. Get the power set of arr.
 * 2. All possible combinations = 2^N where N = arr.length.
 * 3. 2^N = 8. Get the binary rep of each number from 0 to (2^N - 1).
 * 4. Since arr.length = 3, any binary in (3) with length < 3, prifix it with zero to make its length 3.
 * 5. Iterate over each binary string, say 001. Ignore 0, but for 1's push element in arr with same index as 1 into a subset.
 * 6. This subset is a single combination of possible combinations. 
 */

//implementation in JavaScript.

function powerSet(arr) {
    var result = [];
    var possibles = Math.pow(2, arr.length);
    for (var i = 0; i < possibles; i++) {
        var binRep = i.toString(2);

        while (binRep.length < arr.length) {
            binRep = '0' + binRep;
        }

        var temp = [];
        for (var J = 0; J < binRep.length; J++) {
            if (binRep[J] === '1') {
                temp.push(arr[J]);
            }
        }

        result.push(temp);
    }

    return result;
}

module.exports = powerSet;