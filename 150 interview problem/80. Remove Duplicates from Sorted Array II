/**
 * @param {number[]} nums
 * @return {number}
  https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
 */
var removeDuplicates = function(nums) {
    let flag = 2;
     for(let i=2; i<nums.length; i++){ 
        if(nums[i]!=nums[flag-2]){  
            nums[flag] = nums[i];
            flag++;
        }
    }

    return flag;
        
};
