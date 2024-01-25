/**
 * @param {number[]} nums
 * @return {number}
 https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
 var removeDuplicates = function(nums) {
    let flag = 0;
     for(let i=1; i<nums.length; i++){  // [1,1,2]
        if(nums[i]!=nums[flag]){  // 2 == 1
            flag++;
            nums[flag] = nums[i];
        }
    }

    return flag + 1;
};


