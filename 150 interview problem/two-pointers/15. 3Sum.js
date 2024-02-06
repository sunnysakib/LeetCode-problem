/**
 * @param {number[]} nums
 * @return {number[][]}
 https://leetcode.com/problems/3sum/?envType=study-plan-v2&envId=top-interview-150
 */
// var threeSum = function(nums) {
//   let output = [];
//   nums = nums.sort((a,b) => a-b);
//   for(let i = 0; i<nums.length-2; i++){
//     if(nums[i] !== nums[i-1]){
//       for(let j = i+1; j<nums.length-1; j++){
//         for(let k = j+1; k<nums.length; k++){
//             let sum = nums[i] + nums[j] + nums[k];
//             if(sum === 0){
//               let arr  = [];
//               arr.push(nums[i]);
//               arr.push(nums[j]);
//               arr.push(nums[k]);
//               output.push(arr);
//             }
//         }
//       }
//     }
//   }
  
//   return output;
  
// };

var threeSum = function(nums) {
    const res = [];
    nums.sort((a,b) => a-b)

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        if (a > 0) break;
        if (i > 0 && a === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const threeSum = a + nums[l] + nums[r];
            if (threeSum > 0) {
                r--;
            } else if (threeSum < 0) {
                l++;
            } else {
                res.push([a, nums[l], nums[r]]);
                l++;
                r--;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
}
