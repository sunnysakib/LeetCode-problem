/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 https://leetcode.com/problems/find-the-difference/
 */
 var findTheDifference = function(s, t) {
    const set1 = s.split('').sort();
    const set2 = t.split('').sort();
    
    for(let i = 0; i < set2.length; i++){
        if(set1[i] !== set2[i]){
            return set2[i]
        }
    }
};

// check s is empty or not
// s and t create array
// check t by array of s
// if not found then add in a variable