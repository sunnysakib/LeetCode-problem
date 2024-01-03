/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
 */
var rotate = function(nums, k) {
    for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }

};
