/**
 * @param {string} s
 * @return {number}
 https://leetcode.com/problems/roman-to-integer/
 */
var romanToInt = function(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10, 
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;
    for(let i=0; i<s.length; i++){
        if(roman[s[i]]<roman[s[i+1]]){
            let a = roman[s[i+1]] - roman[s[i]];
            result = result + a;
            i++; 
        } else{
            result = result + roman[s[i]];
        }
    }

    return result;
};
