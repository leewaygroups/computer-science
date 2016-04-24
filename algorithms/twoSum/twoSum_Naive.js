/** Given the two nexted for statements, array will be looped twice 
 * hence running time for this solution would be O(n2)*/ 
function twoSum(arr, S) {

  var sums = [];

  // check each element in array
  for (var i = 0; i < arr.length; i++) { 

    // check each other element in the array
    for (var j = i + 1; j < arr.length; j++) {

      // determine if these two elements sum to S
      if (arr[i] + arr[j] === S) {
        sums.push([arr[i], arr[j]]);
      }

    }

  }

  // return all pairs of integers that sum to S
  return sums;

}

twoSum([3, 5, 2, -4, 8, 11], 7);  