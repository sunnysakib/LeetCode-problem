/**
 * @param {string} s
 * @return {boolean}
 https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
 */
var isPalindrome = function(s) {
  if(s == " ") return true;
  s = s.toLowerCase();
  let a = s.split("").filter(a => (a.charCodeAt() >=48 && a.charCodeAt() <=57 ||  a.charCodeAt() >=97 && a.charCodeAt() <=122)).join("");
  let b = s.split("").filter(a => (a.charCodeAt() >=48 && a.charCodeAt() <=57 ||  a.charCodeAt() >=97 && a.charCodeAt() <=122)).reverse().join("");
  if(a === b){
    return true;
  }
  return false;
};
