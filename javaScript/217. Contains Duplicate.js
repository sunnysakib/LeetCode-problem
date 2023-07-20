/**
 * @param {number[]} nums
 * @return {boolean}
https://leetcode.com/problems/contains-duplicate/
 */

var containsDuplicate = function(nums) {
    let flag=nums.length-1;
    for(let i=0; i<nums.length; i++){
        if(i === flag){
            return false;
        }
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]===nums[j]){
                return true;
            }
        }
    }
};

