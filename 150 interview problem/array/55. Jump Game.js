/**
 * @param {number[]} nums
 * @return {boolean}
https://leetcode.com/problems/jump-game/submissions/1144827177/?envType=study-plan-v2&envId=top-interview-150

TC -> O(n)
SC -> O(1)
 */

var canJump = function (nums) {
    let lastIndex = nums.length - 1;

    for (let i = nums.length-2; i >= 0; i--) {
        if (i + nums[i] >= lastIndex) {
            lastIndex = i;
        }
    }
    return lastIndex == 0;

};
