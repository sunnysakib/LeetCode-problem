class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        flag = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[flag] = nums[i]
                flag+=1
        return flag