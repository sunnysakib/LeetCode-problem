/**
 * @param {number[]} nums
 * @return {number[]}
https://leetcode.com/problems/concatenation-of-array/
 */
var getConcatenation = function(nums) {
    let ans = [];
    let flag=0;
    for(let i=0; i<nums.length*2; i++){
        if(i>=nums.length){
            ans[i] = nums[flag];
            flag++;
        }else{
            ans[i] = nums[i];
        }
    }
    return ans
};
