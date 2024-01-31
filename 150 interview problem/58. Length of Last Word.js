/**
 * @param {string} s
 * @return {number}
 https://leetcode.com/problems/length-of-last-word/
 */
var lengthOfLastWord = function(s) {
   let words = s.split(' ').filter(word => {
        return word !== '';
    }) 
    let lastWord = words[words.length-1];

    return lastWord.length;
};
