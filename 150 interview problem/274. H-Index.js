/**
 * @param {number[]} citations
 * @return {number}

 https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150
  
 */
var hIndex = function(citations) {
      const h = citations.length;
  citations.sort ((a,b)=>(a-b));
         let i;
    for(i=0;i<h;i++){
        if(h-i<=citations[i]){
            break;
        }
    }
    return h-i;
};
