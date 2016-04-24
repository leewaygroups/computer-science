/** input array is looped only once hence complexity would be linear.
 *Running time for this solution ~ O(n).
 */ 
function twoSum(arr, S) {
    var twoSumArr = [];
    var hashTable = [];
    
    /**iterate over arr begining from second element */
    for (var i = 0; i < arr.length; i++) {
        
        /**put element in arr into hash table 
         * elemenet index should correspond to its 
         * value so the hash table naturally indexed
        */
        hashTable[arr[i]] = arr[i];

        var sumMinusElement = S - arr[i];
        
        /** if TRUE then we have a two sum */
        if (hashTable[sumMinusElement] !== undefined) {
            twoSumArr.push([arr[i], sumMinusElement])
        }
    }

    return twoSumArr;
}

module.exports = twoSum;