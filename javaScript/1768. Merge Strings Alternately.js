/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 https://leetcode.com/problems/merge-strings-alternately/
 */
 var mergeAlternately = function(word1, word2) {
    let marged = [];
   let w1 = word1.split(""); // ['a','b']
    let w2 = word2.split(""); // ['p','q','r','s']

     if(w1.length === w2.length){
       for(let i=0; i<w2.length; i++){
               marged.push(w1[i]);
               marged.push(w2[i]);
       } 
    }
    if(w1.length < w2.length){
       for(let i=0; i<w2.length; i++){
           if(w1[i] !== undefined){
               marged.push(w1[i]);
           }
               marged.push(w2[i]);
       } 
    }

    if(w1.length > w2.length){
       for(let i=0; i<w1.length; i++){
           marged.push(w1[i]);
           if(w2[i] !== undefined){
               marged.push(w2[i]);
           }
       } 
    }
    return marged.join("");
};