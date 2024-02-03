/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/1163088020/
 */
var strStr = function (haystack, needle) {
    
    for (let i = 0; i < haystack.length; i++) {
        let k = i; 
        let j = 0;
        while(haystack[k] == needle[j] && j < needle.length){
            k++; 
            j++;
        }
        if(j == needle.length) return i;
    }
    return -1;
};
