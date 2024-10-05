
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        flag = 0
        i = 0
        j = 1
        while j < len(nums):
            if nums[i] != nums[j]:
                i+=1
                j+=1
                flag=0
            elif nums[i] == nums[j] and flag == 0:
                i+=1
                j+=1
                flag=1
            elif nums[i] == nums[j] and flag == 1:
                if j == len(nums)-1:
                    nums.pop(j)
                    break
                nums[j] = nums[j+1]
                nums.pop(j+1)
            else:
                nums[j] = nums[j+1]
                nums.pop(j+1)
                flag=0
        return len(nums)

