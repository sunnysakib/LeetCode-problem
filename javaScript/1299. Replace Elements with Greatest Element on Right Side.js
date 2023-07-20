/**
 * @param {number[]} arr
 * @return {number[]}
 nums[i]

output = [18,6,6,6,1,-1]

if nums.ln === 1 return output[0] = nums[0];

i = 1; i<num.ln; i++; 

https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

 */
var replaceElements = function(arr) {
    let output = [];
    let max = 0;
    if(arr.length === 1){
        output[0] = -1
        return output;
    } 

    for(let i=1; i<arr.length; i++){
        max = arr[i];
        if(i === arr.length-1){
            output[i] = -1;
        }
        for(let j=i+1; j<arr.length;j++){
            if(max < arr[j]){
             max = arr[j];
            }
        }
        output[i-1] = max;
    }
    return output;
};