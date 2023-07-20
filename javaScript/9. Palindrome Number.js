/**
 * @param {number} x
 * @return {boolean}
 https://leetcode.com/problems/palindrome-number/
 */
 var isPalindrome = function(x) {
   let a = x.toString();
   let reverse = a.split("").reverse().join("");
   if(a === reverse) return true;
   else return false;
};