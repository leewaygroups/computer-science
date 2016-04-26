/** 
 * Running time for this solution ~ O(n^2) - quadratic runtime.
 * where n = arr.length
 * This is only less efficient that powerSet for n < 5. However as n grows larger.
 * Hence for large set, this will be a better performing algorithm
 */ 
function powerSet2(ary) {
    var ps = [[]];
    for (var i=0; i < ary.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(ary[i]));
        }
    }
    return ps;
}
 
module.exports = powerSet2;