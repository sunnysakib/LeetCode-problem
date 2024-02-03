/**
 * @param {number[]} nums
 * @return {number}
https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150
TC -> O(n2);
SC -> O(n)
 */
var jump = function(nums) {
   let arr = [0];
  for(let i=1; i<nums.length; i++){
    arr.push(-1);
  }

  for(let i=0; i<nums.length-1; i++){ // 0 -> 1
    let j = 1;
    while(j<=nums[i]){
      if(arr[j+i] == -1){
        arr[j+i] = i + 1;
      }
      if(arr[j+i] - arr[i] > 1){
        arr[j+i] = arr[i] + 1;
      }
      j++;
    }
  }
  return arr.pop();
};
