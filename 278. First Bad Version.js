/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;
        let r = n;
        let mid;

        while (l < r) {
            mid = Math.floor((l+r)/2)
            if (isBadVersion(mid)) {
                r = mid;
            } else {
                l = mid + 1
            }
            if (r == l) {
                return r;
            }
        }

        return n;
    };
};