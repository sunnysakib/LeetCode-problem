/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 link: https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 */



// solution 1
// TM: O((m+n)log(m+n))
// SC: O(1)

var merge = function(nums1, m, nums2, n) {
   for(let i=m, j=0; j<n; i++,j++){
       nums1[i] = nums2[j];
   }
   nums1.sort((a, b) => a - b);

};


// solution 2
// TC: O(m+n)
// SC: O(1)

var merge = function(nums1, m, nums2, n) {
  
    let i = m-1;
    let j = n-1;  
    let k = m+n-1;
 
    while(j>=0 && i>=0){
        if(nums1[i] < nums2[j]){
            nums1[k] = nums2[j];
            j--;
            k--; 
        }else{
            nums1[k] = nums1[i];
            i--;
            k--;
        }
    }
 
    while(j>=0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
 };



 /*
[1,2,3,0,0,0]   [2,5,6]

 i k             j
[1,2,2,3,5,6]   [2,5,6]

*/

 
