/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 https://leetcode.com/problems/two-sum/
 */
var twoSum = function(nums, target) {

    for(let i=0; i<nums.length; i++){
         for(let j=i+1; j<nums.length; j++){
            if((nums[i]+nums[j] === target)){
                return [i, j];
            }
        }
    }
};
// Time complexity: 0(n2)
// Space complexity: O(1)
