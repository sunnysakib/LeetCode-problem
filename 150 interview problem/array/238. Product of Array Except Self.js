/**
 * @param {number[]} nums
 * @return {number[]}
https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150
 TC -> O(n) 
 SC -> O(n)
 */
var productExceptSelf = function (nums) {
    let prefix = [];
    let postfix = [];
    let ans = [];
    prefix[0 - 1] = 1;
    postfix[nums.length] = 1;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            prefix.push(nums[0]);
        } else {
            prefix.push(prefix[i - 1] * nums[i]);
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            postfix[i] = nums[i];
        } else {
            postfix[i] = postfix[i + 1] * nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        ans[i] = prefix[i - 1] * postfix[i + 1];

        if (ans.length === nums.length) {
            return ans;
        }
    }
};
