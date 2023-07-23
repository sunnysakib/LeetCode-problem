/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 https://leetcode.com/problems/remove-element/description/
 */
 var removeElement = function(nums, val) {
    let k = 0;  
   for(let i=0; i<nums.length; i++){
         if(val !== nums[i]){
             nums[k] = nums[i];
           k++;
         }
     }
     return k;
 };