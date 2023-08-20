/**
 * @param {number[]} nums
 * @return {boolean}
https://leetcode.com/problems/contains-duplicate/
 */

// solution 1 ---> Time complexity: O(n^2)
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


// solution 2 ---> Time complexity: O(n)
var containsDuplicate = function(nums) {
    let collection = new Map();
     for(let i=0; i<nums.length; i++){
       collection.set(nums[i], nums[i]);
    }
    if(collection.size === nums.length){
        return false;
    }
    return true;
};

