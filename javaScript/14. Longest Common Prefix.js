/**
 * @param {string[]} strs
 * @return {string}
    Time O(N^2) | Space O(N)
    https://leetcode.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function(strs) {
     let temp = '';
    if(strs.length === 1){
      return strs[0]
    }
     for(let i=0; i<strs[0].length; i++){
        let c = 0;
        for(let j=1; j<strs.length; j++){ 
            if(strs[0][i] === strs[j][i]){   
                c++;
            }else{
              return temp;
            }
            if(c === strs.length - 1){ 
              temp = temp + strs[0][i];
            }  
        }
    }
  return temp;
};
