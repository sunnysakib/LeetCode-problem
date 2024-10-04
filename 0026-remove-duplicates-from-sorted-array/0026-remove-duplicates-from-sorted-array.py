#          i j
#         [0,0,1,1,1,2,2,3,3,4]
#          i j
#         [0,1,1,1,2,2,3,3,4]
#            i j
#         [0,1,1,1,2,2,3,3,4]
#            i j
#         [0,1,1,2,2,3,3,4]
#            i j
#         [0,1,2,2,3,3,4]
#              i j
#         [0,1,2,2,3,3,4]
#              i j
#         [0,1,2,3,3,4]
#                i j
#         [0,1,2,3,3,4]
#                i j
#         [0,1,2,3,4]

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        j = 1
        while j < len(nums):
            if nums[i] == nums[j]:
                nums.pop(i)
            else:
                i = i + 1
                j = j + 1
        
        return len(nums)

        