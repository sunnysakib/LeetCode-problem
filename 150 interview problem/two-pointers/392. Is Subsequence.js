/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
    https://leetcode.com/problems/is-subsequence/submissions/
    i j
    0 0 =
    1 1 !=
    2 1 =
    3 2 !=
    4 2 !=
    5 2 = 
 */
    var isSubsequence = function(s, t) {
        if(s===t || s.length === 0) return true;
        if(s.length > t.length) return false;
        let j = 0;
        for(let i=0; i<t.length; i++){
            if(s[j] === t[i]){
                j++;
            }
        }
         return j === s.length
    };