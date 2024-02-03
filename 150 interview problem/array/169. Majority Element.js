/**
 * @param {number[]} nums
 * @return {number}
    Link: https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
 */

// ## solution 1
TC: O(n),  SC: O(nlogn) 
var majorityElement = function(nums) {
    let numsSort = nums.sort();
    const n = Math.ceil(nums.length/2);
    let element = numsSort[n];
    return element;
};

// ## solution 2
// TC: O(n),  SC: O(1) 
var majorityElement = function(nums) {
    let element = 0;
    let count = 0;

    for(let i=0; i<nums.length; i++){
        if(count===0){
            element = nums[i];
            count++;
        }else if(element==nums[i]){
            count++;
        }else{
            count--;
        }
    }
    return element;
};
