/**
 * @param {number} numRows
 * @return {number[][]}
https://leetcode.com/problems/pascals-triangle/description/
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    if(numRows === 1) return[[1]];
    if(numRows === 2) return[[1],[1,1]];
    let output = [[1],[1,1]];
    for(let i=2; i<numRows; i++){
        output[i] = [1]
        output[i][i] = 1;
        for(let j=1; j<i; j++){
            output[i][j] = output[i-1][j-1]+output[i-1][j];
        }
    }
    return output;
};
