/**
 * @param {string} s
 * @return {string}
 https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=top-interview-150
 TC -> O(n/2)
 SC -> O(n)
 */
var reverseWords = function(s) {
    s = s.split(" ").filter(a => a !== '');
    let n = s.length;
    for(let i=0,j=n-1; i<n/2; i++,j--){
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
    return s.join(" ");
};
