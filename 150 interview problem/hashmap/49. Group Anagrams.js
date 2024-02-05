/**
 * @param {string[]} strs
 * @return {string[][]}
 https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150
 */
var groupAnagrams = function(strs) {
    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
        else m.set(sorted, [str]);
    }
    return Array.from(m.values());
};


// time limit exceeded
// var groupAnagrams = function(strs) {
//     if (strs.length === 1) return [strs];
//   let arr = [];
//   let flag = new Array(strs.length).fill(0);
 
//   for (let i = 0; i < strs.length; i++) {
//       if (flag[i] !== 1) {
//           let currentGroup = [strs[i]];

//           for (let j = i + 1; j < strs.length; j++) {
//               let a = strs[i].split("").sort().join("");
//               let b = strs[j].split("").sort().join("");

//               if (a === b) {
//                   currentGroup.push(strs[j]);
//                   flag[j] = 1;
//               }
//           }
//           arr.push(currentGroup);
//       }
//   }

//   return arr;
// };
